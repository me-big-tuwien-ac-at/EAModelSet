package me.big.cli.app.commands;

import com.fasterxml.jackson.databind.ObjectMapper;
import me.big.cli.app.model.dataset.Dataset;
import me.big.cli.app.model.dataset.ModelInfo;
import me.big.cli.app.util.FileUtils;
import net.jimblackler.jsonschemafriend.Schema;
import net.jimblackler.jsonschemafriend.SchemaException;
import net.jimblackler.jsonschemafriend.SchemaStore;
import net.jimblackler.jsonschemafriend.Validator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.Availability;
import org.springframework.shell.command.annotation.Option;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;
import org.springframework.shell.standard.ShellMethodAvailability;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@ShellComponent
public class ValidationCommands {

    private final DataProcessing dataProcessing;

    @Autowired
    public ValidationCommands(DataProcessing dataProcessing) {
        this.dataProcessing = dataProcessing;
    }

    // validateDir /Users/philipp/projects/EAModelSet/dataset
    @ShellMethod(value = "Validate the given dataset directory including all its processed models", key = "validateDir")
    public void validateDir(@Option String datasetDir) throws IOException {
        System.out.println("Validating directory file structure...");

        // dataset/
        File datasetDirFile = new File(datasetDir);
        if (!datasetDirFile.isDirectory()) {
            System.err.println("ERROR, invalid directory!");
            return;
        }
        // dataset/dataset.json
        File datasetJsonFile = new File(datasetDirFile.getCanonicalPath() + "/dataset.json");
        if (!datasetJsonFile.exists()) {
            System.err.println("ERROR, no 'dataset.json' found!");
            return;
        }
        // dataset/processed-models/
        File processedModelsDirFile = new File(datasetDirFile.getCanonicalPath() + "/processed-models/");
        if (!processedModelsDirFile.isDirectory()) {
            System.err.println("ERROR, invalid 'processed-models/' directory in dataset!");
            return;
        }
        // dataset/processed-models/<id>
        List<File> modelDirs = FileUtils.getDirs(processedModelsDirFile.getCanonicalPath());
        ObjectMapper mapper = new ObjectMapper();

        System.out.println("Validating dataset.json...");
        try {
            // init schema store and load schema from resources
            SchemaStore schemaStore = new SchemaStore();
            Schema schema = schemaStore.loadSchema(ValidationCommands.class.getResource("/ea-modelset.schema.json"));
            Validator validator = new Validator();
            validator.validate(schema, datasetJsonFile);
        } catch (SchemaException | IOException e) {
            e.printStackTrace();
        }
        Dataset dataset = mapper.readValue(datasetJsonFile, Dataset.class);
        Map<String, ModelInfo> modelInfos = dataset.getModelInfos().stream()
                .collect(Collectors.toMap(ModelInfo::getId, Function.identity()));
        if (dataset.getModelCount() != modelDirs.size()) {
            System.err.printf("WARNING, model count '%s' in dataset.json does not match model count '%s' in 'processed-models/' directory!%n", dataset.getModelCount(), modelDirs.size());
        }

        System.out.println("Validating model directories...");
        for (File modelDir : modelDirs) {
            // validate modelFolder
            validateModelDir(modelDir.getAbsolutePath());
            // validate dataset entry
            if (!modelInfos.containsKey(modelDir.getName())) {
                System.err.printf("WARNING: model '%s' does not exist in dataset!%n", modelDir.getName());
            } else {
                // TODO: Validate properties match in dataset.json and model.json
                // ModelInfo modelInfo = modelInfos.get(modelDir.getName());
                // ArchimateModelNew jsonModel = mapper.readValue(modelDir.getCanonicalPath() + "/model.json", ArchimateModelNew.class);
            }
        }
        System.out.println("Validation finished!");
    }

    @ShellMethod(value = "Validate a given model directory", key = "validateModelDir")
    public void validateModelDir(String modelDir) {
        File modelDirFile = new File(modelDir);
        if (!modelDirFile.isDirectory()) {
            System.err.println("ERROR: invalid directory!");
            return;
        }
        File jsonFile = new File(modelDirFile.getAbsolutePath() + "/model.json");
        if (!jsonFile.exists()) {
            System.err.printf("ERROR: 'model.json' file for id '%s' does not exist!%n", modelDirFile.getName());
            return;
        }
        if (!(new File(modelDirFile.getAbsolutePath() + "/model.archimate")).exists()) {
            System.err.printf("WARNING: 'model.archimate' file for id '%s' does not exist!%n", modelDirFile.getName());
        }
        if (!(new File(modelDirFile.getAbsolutePath() + "/model.xml")).exists()) {
            System.err.printf("WARNING: 'model.xml' file for id '%s' does not exist!%n", modelDirFile.getName());
        }
        File csvDir = new File(modelDirFile.getAbsolutePath() + "/csv/");
        if (!csvDir.isDirectory()) {
            System.err.printf("WARNING: 'csv/' directory for id '%s' does not exist!%n", modelDirFile.getName());
        } else {
            File[] csvFiles = csvDir.listFiles(f -> f.getName().endsWith(".csv"));
            if (csvFiles == null || csvFiles.length != 3) {
                System.err.printf("WARNING: 'csv/' directory for id '%s' should contain exactly 3 csv files!%n", modelDirFile.getName());
            }
        }

        /* verify JSON schema (validation process is way slower with this)
        try {
            // init schema store and load schema from resources
            SchemaStore schemaStore = new SchemaStore();
            Schema schema = schemaStore.loadSchema(ValidationCommands.class.getResource("/ea-model.schema.json"));
            Validator validator = new Validator();
            validator.validate(schema, jsonFile);

        } catch (SchemaException | IOException e) {
            e.printStackTrace();
        }*/
    }

    @ShellMethod(value = "Validate the loaded dataset including all its processed models", key = "validateLoaded")
    @ShellMethodAvailability("availabilityCheck")
    public void validateLoaded() throws IOException {
        File datasetDir = dataProcessing.getDatasetDir();
        validateDir(datasetDir.getAbsolutePath());
    }

    @ShellMethod(value = "Validate a model in the loaded dataset through the provided ID", key = "validateModelId")
    @ShellMethodAvailability("availabilityCheck")
    public void validate(String modelId) throws IOException {
        File processedModelsDir = dataProcessing.getProcessedModelsDirFile();
        validateModelDir(processedModelsDir.getCanonicalPath() + "/" + modelId);
    }

    public Availability availabilityCheck() {
        return dataProcessing.isLoaded()
                ? Availability.available()
                : Availability.unavailable("Model is not loaded into database!");
    }
}

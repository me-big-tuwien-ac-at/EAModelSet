package me.big.cli.app.commands;

import com.fasterxml.jackson.databind.ObjectMapper;
import me.big.cli.app.model.ArchimateModelNew;
import me.big.cli.app.model.ParsedModel;
import me.big.cli.app.parser.ModelParser;
import me.big.cli.app.service.ModelService;
import me.big.cli.app.util.ArchiCliUtils;
import me.big.cli.app.util.FileUtils;
import me.big.cli.app.util.ModelUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.Availability;
import org.springframework.shell.command.annotation.Option;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;
import org.springframework.shell.standard.ShellMethodAvailability;
import java.io.File;
import java.io.IOException;
import java.util.List;

@ShellComponent
public class DataProcessing {

    private final ModelService modelService;
    private boolean loaded = false;

    // access to relevant dataset files for dependant classes (once loaded == true)
    private File datasetDirFile;
    private File datasetJsonFile;
    private File processedModelsDirFile;

    @Autowired
    public DataProcessing(ModelService modelService) {
        this.modelService = modelService;
    }

    @ShellMethod(value = "Load the given dataset directory into MongoDB", key = "load")
    public void load(@Option(required = true) String datasetDir) throws IOException {

        // get relevant files from dataset
        datasetDirFile = FileUtils.getDirFile(datasetDir);
        datasetJsonFile = FileUtils.getRelativeFile(datasetDirFile, "dataset.json");
        processedModelsDirFile = FileUtils.getRelativeDir(datasetDirFile, "processed-models");
        List<File> modelDirs = FileUtils.getDirs(processedModelsDirFile.getAbsolutePath());

        // reset DB
        modelService.deleteAll();

        // from each model directory (i.e. processed-models/<id>/): read model.json and store in DB
        ObjectMapper mapper = new ObjectMapper();
        for (File file : modelDirs) {
            // in case an exception is thrown while reading a model, the whole process is stopped
            File jsonFile = FileUtils.getRelativeFile(file, "model.json");
            ArchimateModelNew jsonModel = mapper.readValue(jsonFile, ArchimateModelNew.class);
            modelService.save(jsonModel);
        }

        // verify models were added to DB and set 'loaded' to true/false, making remaining commands available/un-available
        Long count = modelService.getTotalModels();
        if (count > 0) {
            System.out.printf("%d models loaded into database%n", count);
            loaded = true;
        } else {
            System.err.println("ERROR: no models loaded into database!");
            loaded = false;
        }
    }

    @ShellMethod(value = "Add a model to the loaded dataset", key = "addModel")
    @ShellMethodAvailability("availabilityCheck")
    public void addModel(@Option(required = true) String modelFilePath) throws IOException {
        if (!modelFilePath.endsWith(".xml") && !modelFilePath.endsWith(".archimate")) {
            throw new IllegalArgumentException("ERROR: invalid file extension! Should end in '.xml' or '.archimate'");
        }
        File modelFile = FileUtils.getFile(modelFilePath);

        ParsedModel parsedModel = ModelParser.parseModel(modelFile);
        if (!isValid(parsedModel)) {
            return;
        }

        // check DB if ID already exists
        // TODO: add to duplicates list
        if (modelService.getModelById(parsedModel.getId()).isPresent()) {
            System.err.printf("ERROR: model with id '%s' already exists!%n", parsedModel.getId());
            return;
        }
        File modelDir = createModelDir(processedModelsDirFile, parsedModel);
        // store source .xml/.archimate model (i.e. the one being processed)
        FileUtils.storeSourceModel(modelDir, parsedModel, modelFile);
        // export to other archimate format (i.e. archimate -> xml, xml -> archimate) + CSV
        ArchiCliUtils.exportModel(modelDir, parsedModel, modelFile);
        // create JSON model
        ArchimateModelNew jsonModel = ModelUtils.createJsonModelFrom(parsedModel);

        // set additional properties
        ModelUtils.setSource(jsonModel, modelFile);
        ModelUtils.setFormats(jsonModel, modelDir);
        ModelUtils.setLanguage(jsonModel);
        if (parsedModel.isHasWarning()) {
            jsonModel.getTags().add("WARNING");
        }

        File file = FileUtils.storeJsonModelFile(modelDir, jsonModel);
        if (file != null) {
            modelService.save(jsonModel);
            System.out.println("Model successfully stored in DB!");
        } else {
            System.err.println("ERROR: failed to store JSON model!");
        }
    }

    @ShellMethod(value = "Process a model to the given dataset folder", key = "addModelDir")
    public void processModel(
            @Option(longNames = "modelPath", shortNames = 'm', required = true) String modelPath,
            @Option(longNames = "datasetDirPath", shortNames = 'd', required = true) String datasetDirPath
    ) throws IOException {
        // verify provided model file and set up files for processing
        if (!modelPath.endsWith(".xml") && !modelPath.endsWith(".archimate")) {
            throw new IllegalArgumentException("ERROR: invalid file extension! Should end in '.xml' or '.archimate'");
        }
        File modelFile = FileUtils.getFile(modelPath);
        File datasetDir = FileUtils.getDirFile(datasetDirPath);
        // File datasetJsonFile = FileUtils.getRelativeFile(datasetDir, "dataset.json");
        File processedModelsDir = FileUtils.getRelativeDir(datasetDir, "processed-models");

        ParsedModel parsedModel = ModelParser.parseModel(modelFile);
        if (!isValid(parsedModel)) {
            return;
        }

        File modelDir = createModelDir(processedModelsDir, parsedModel);
        FileUtils.storeSourceModel(modelDir, parsedModel, modelFile);
        ArchiCliUtils.exportModel(modelDir, parsedModel, modelFile);
        ArchimateModelNew jsonModel = ModelUtils.createJsonModelFrom(parsedModel);

        ModelUtils.setSource(jsonModel, modelFile);
        ModelUtils.setFormats(jsonModel, modelDir);
        ModelUtils.setLanguage(jsonModel);
        if (parsedModel.isHasWarning()) {
            jsonModel.getTags().add("WARNING");
        }
        File file = FileUtils.storeJsonModelFile(modelDir, jsonModel);
        if (file != null) {
            System.out.println("Model successfully added to dataset!");
        } else {
            System.err.println("ERROR: failed to create JSON file!");
        }
    }

    public boolean isLoaded() {
        return loaded;
    }

    public Availability availabilityCheck() {
        return loaded
                ? Availability.available()
                : Availability.unavailable("Model is not loaded into database!");
    }

    public File getDatasetDir() {
        return datasetDirFile;
    }

    public File getDatasetJsonFile() {
        return datasetJsonFile;
    }

    public File getProcessedModelsDirFile() {
        return processedModelsDirFile;
    }

    private boolean isValid(ParsedModel parsedModel) {
        if (parsedModel == null) {
            System.err.println("ERROR: could not parse model!");
            return false;
        } else if (parsedModel.getElements().size() < 10) {
            System.err.println("ERROR: model has less than 10 elements!");
            return false;
        } else {
            return true;
        }
    }

    private File createModelDir(File processedModelsDir, ParsedModel parsedModel) {
        File modelDir = new File(processedModelsDir, parsedModel.getId());
        // check if model ID already exists
        if (modelDir.exists() || modelDir.isDirectory()) {
            // TODO: add to duplicates list
            System.err.printf("ERROR: model with id '%s' already exists!%n", parsedModel.getId());
            return null;
        }
        // create the directory
        boolean createdDir = modelDir.mkdirs();
        if (!createdDir) {
            System.err.println("ERROR, could not create model directory!");
            return null;
        }
        return modelDir;
    }
}

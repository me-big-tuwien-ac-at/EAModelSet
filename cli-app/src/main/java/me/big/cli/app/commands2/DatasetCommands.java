package me.big.cli.app.commands2;

import com.fasterxml.jackson.databind.ObjectMapper;
import me.big.cli.app.model.ArchimateModelNew;
import me.big.cli.app.model.ParsedModel;
import me.big.cli.app.parser.ModelParser;
import me.big.cli.app.util.ArchiCliUtils;
import me.big.cli.app.util.FileUtils;
import me.big.cli.app.util.ModelUtils;
import org.springframework.shell.command.annotation.Option;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;
import java.io.File;
import java.io.IOException;

@ShellComponent("Dataset")
public class DatasetCommands {

    @ShellMethod(value = "Add a model to the given dataset folder", key = "addModelDir")
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

    @ShellMethod(value = "Remove a model from the dataset", key = "removeModel")
    public void removeModel(
            @Option(required = true) String datasetDirPath,
            @Option(required = true) String modelId
    ) throws IOException {
        File datasetDir = FileUtils.getDirFile(datasetDirPath);
        File processedModelsDir = FileUtils.getRelativeDir(datasetDir, "processed-models");
        File modelDir = FileUtils.getRelativeDir(processedModelsDir, modelId);
        File jsonFile = FileUtils.getRelativeFile(modelDir, "model.json");
        ObjectMapper mapper = new ObjectMapper();
        ArchimateModelNew jsonModel = mapper.readValue(jsonFile, ArchimateModelNew.class);
        File sourceFile = FileUtils.getRelativeFile(datasetDir.getParentFile(), jsonModel.getSourceFile());
        boolean deleted = sourceFile.delete();
        if (!deleted) {
            System.err.printf("Error: failed to delete source file!%n");
        }
        System.out.printf("Deleting model directory for '%s'...%n", modelDir.getName());
        org.apache.commons.io.FileUtils.deleteDirectory(modelDir);
        System.out.println("Deleted!");
    }

    private boolean isValid(ParsedModel parsedModel) {
        if (parsedModel == null) {
            System.err.println("ERROR: could not parse model!");
            return false;
        } else if (parsedModel.getElements().size() < 10) {
            System.err.println("ERROR: model has less than 10 elements!");
            return false;
        }
        return true;
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

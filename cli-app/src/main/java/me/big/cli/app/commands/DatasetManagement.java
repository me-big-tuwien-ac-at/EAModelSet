package me.big.cli.app.commands;

import com.fasterxml.jackson.databind.ObjectMapper;
import me.big.cli.app.model.ArchimateModel;
import me.big.cli.app.model.dataset.Dataset;
import me.big.cli.app.model.dataset.DatasetStats;
import me.big.cli.app.model.dataset.ModelInfo;
import me.big.cli.app.service.ModelService;
import me.big.cli.app.util.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.Availability;
import org.springframework.shell.command.annotation.Option;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;
import org.springframework.shell.standard.ShellMethodAvailability;
import java.io.File;
import java.io.IOException;
import java.util.*;

@ShellComponent("Dataset Management")
public class DatasetManagement {

    private final ModelService modelService;

    private boolean modelLoaded = false;

    @Autowired
    public DatasetManagement(ModelService modelService) {
        this.modelService = modelService;
    }

    @ShellMethod(value = "Load the processed models from the dataset into MongoDB", key = "load")
    public void load(@Option String modelDir) throws IOException {
        File[] modelDirs = FileUtils.getModelDirs(modelDir);
        ObjectMapper mapper = new ObjectMapper();

        modelService.deleteAll();
        for (File file : modelDirs) {
            File jsonFile = new File(file.getAbsolutePath() + "/model.json");
            ArchimateModel jsonModel = mapper.readValue(jsonFile, ArchimateModel.class);
            modelService.save(jsonModel);
        }
        Long count = modelService.getTotalModels();
        if (count > 0) {
            System.out.printf("%d models loaded into database.%n", count);
            modelLoaded = true;
        } else {
            System.err.println("No models found!");
            modelLoaded = false;
        }
    }

    @ShellMethod(value = "Create dataset JSON file (dataset.json)", key = "datasetJson")
    @ShellMethodAvailability("availabilityCheck")
    public void createDatasetJson(@Option String targetDir) throws IOException {
        File targetFile = FileUtils.getDirFile(targetDir);
        List<ModelInfo> modelInfos = modelService.findAllModelInfos();
        Dataset dataset = Dataset.builder()
                .title("EA ModelSet")
                .version("0.0.1")
                .lastUpdated(new Date())
                .modelCount((long) modelInfos.size())
                .modelInfos(modelInfos)
                .build();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(new File(targetFile.getCanonicalPath() + "/dataset.json"), dataset);
        System.out.printf("dataset.json exported to %s %n", targetFile.getAbsolutePath());
    }

    @ShellMethod(value = "Create dataset statistics JSON file (dataset_stats.json)", key ="datasetStats")
    @ShellMethodAvailability("availabilityCheck")
    public void stats(@Option String targetDir) throws IOException {
        File targetFile = FileUtils.getDirFile(targetDir);
        DatasetStats datasetStats = DatasetStats.builder()
                .title("EA ModelSet Dataset Statistics")
                .version("0.0.1")
                .lastUpdated(new Date())
                .totalModals(modelService.getTotalModels())
                .totalElements(modelService.getTotalElements())
                .totalRelationships(modelService.getTotalRelationships())
                .totalViews(modelService.getTotalViews())
                .languageStats(modelService.getLanguageStats())
                .build();
        ObjectMapper mapper = new ObjectMapper();
        mapper.writeValue(new File(targetFile.getCanonicalPath() + "/dataset_stats.json"), datasetStats);
        System.out.printf("dataset_stats.json exported to %s %n", targetFile.getAbsolutePath());
    }

    public Availability availabilityCheck() {
        return modelLoaded
                ? Availability.available()
                : Availability.unavailable("Model is not loaded into database!");
    }
}

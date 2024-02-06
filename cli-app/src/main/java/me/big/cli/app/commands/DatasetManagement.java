package me.big.cli.app.commands;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.victools.jsonschema.generator.*;
import me.big.cli.app.model.ArchimateModelNew;
import me.big.cli.app.model.dataset.Dataset;
import me.big.cli.app.model.dataset.Distribution;
import me.big.cli.app.model.stats.DatasetStats;
import me.big.cli.app.model.dataset.ModelInfo;
import me.big.cli.app.service.ModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.Availability;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;
import org.springframework.shell.standard.ShellMethodAvailability;
import java.io.File;
import java.io.IOException;
import java.util.*;

@ShellComponent("Dataset Management")
public class DatasetManagement {

    private final ModelService modelService;
    private final DataProcessing dataProcessing;

    @Autowired
    public DatasetManagement(ModelService modelService, DataProcessing dataProcessing) {
        this.modelService = modelService;
        this.dataProcessing = dataProcessing;
    }

    @ShellMethod(value = "Create dataset.json file within the dataset directory", key = "datasetJson")
    @ShellMethodAvailability("availabilityCheck")
    public void datasetJson() throws IOException {
        List<ModelInfo> modelInfos = modelService.findAllModelInfos();
        Dataset dataset = Dataset.builder()
                .title("EA ModelSet")
                .version("0.0.2")
                .lastUpdated(new Date())
                .repositoryUrl("https://github.com/me-big-tuwien-ac-at/EAModelSet/")
                .homepageUrl("https://me.big.tuwien.ac.at/EAModelSet/")
                .distribution(Distribution.builder()
                        .title("EA ModelSet ZIP Archive")
                        .mediaType(".zip")
                        // TODO: Update URL once zip is published
                        .downloadUrl("https://github.com/me-big-tuwien-ac-at/EAModelSet/releases/")
                        // TODO: fix hard-coded size (use e.g. library to calculate)
                        .byteSize(67504418L)
                        .build())
                .modelCount((long) modelInfos.size())
                .modelInfos(modelInfos)
                .build();
        ObjectMapper mapper = new ObjectMapper();
        File targetFile = new File(dataProcessing.getDatasetDir(), "dataset.json");
        mapper.writeValue(targetFile, dataset);
        System.out.printf("'dataset.json' file exported to '%s'%n", targetFile.getCanonicalPath());
    }

    @ShellMethod(value = "Create dataset statistics JSON file (dataset_stats.json)", key ="datasetStats")
    @ShellMethodAvailability("availabilityCheck")
    public void stats() throws IOException {
        DatasetStats datasetStats = DatasetStats.builder()
                .title("EA ModelSet Dataset Statistics")
                .version("0.0.1")
                .lastUpdated(new Date())
                .totalModals(modelService.getTotalModels())
                .totalElements(modelService.getTotalElements())
                .totalRelationships(modelService.getTotalRelationships())
                .totalViews(modelService.getTotalViews())
                .minElements(modelService.getMinElementCount().orElse(0L))
                .minRelationships(modelService.getMinRelationshipCount().orElse(0L))
                .minViews(modelService.getMinViewCount().orElse(0L))
                .maxElements(modelService.getMaxElementCount().orElse(0L))
                .maxRelationships(modelService.getMaxRelationshipCount().orElse(0L))
                .maxViews(modelService.getMaxViewCount().orElse(0L))
                .languageStats(modelService.getLanguageStats())
                .elementOccurrenceFrequency(modelService.getElementOccurrenceFrequency())
                .relationshipOccurrenceFrequency(modelService.getRelationshipOccurrenceFrequency())
                .build();
        ObjectMapper mapper = new ObjectMapper();
        File targetFile = new File(dataProcessing.getDatasetDir(), "dataset_stats.json");
        mapper.writeValue(targetFile, datasetStats);
        System.out.printf("'dataset_stats.json' file exported to '%s'%n", targetFile.getAbsolutePath());
    }

    @ShellMethod(value = "Generate dataset JSON schema", key = "genDatasetSchema")
    public void generateDatasetSchema() {
        // Generates a JSON schema based on the Dataset class
        JsonNode jsonSchema = setupSchemaGenerator().generateSchema(Dataset.class);
        System.out.println(jsonSchema.toPrettyString());
    }

    @ShellMethod(value = "Generate model JSON schema", key = "genModelSchema")
    public void generateModelSchema() {
        // Generates a JSON schema based on the ArchimateModel class
        JsonNode jsonSchema = setupSchemaGenerator().generateSchema(ArchimateModelNew.class);
        System.out.println(jsonSchema.toPrettyString());
    }

    private SchemaGenerator setupSchemaGenerator() {
        SchemaGeneratorConfigBuilder configBuilder = new SchemaGeneratorConfigBuilder(
                SchemaVersion.DRAFT_2020_12,
                OptionPreset.PLAIN_JSON
        );
        SchemaGeneratorConfig config = configBuilder.build();
        return new SchemaGenerator(config);
    }

    public Availability availabilityCheck() {
        return dataProcessing.isLoaded()
                ? Availability.available()
                : Availability.unavailable("Dataset is not loaded!");
    }
}

package me.big.cli.app.commands;

import com.fasterxml.jackson.databind.ObjectMapper;
import me.big.cli.app.model.ArchimateModel;
import me.big.cli.app.model.ArchimateModelNew;
import org.springframework.shell.command.annotation.Option;
import org.apache.commons.io.FileUtils;
import java.io.File;
import java.io.IOException;
import java.util.HashSet;

// @ShellComponent
public class TestCommands {

    // @ShellMethod(value = "Remove Model", key = "removeModelzzzz")
    public void removeModels() throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        File[] files = new File("/Users/philipp/projects/EAModelSet/dataset/processed-models/").listFiles(File::isDirectory);
        for (File file : files) {
            String id = file.getName();
            if (id.startsWith("id-")) {
                id = id.substring(3);
                for (File file2 : files) {
                    if (file2.getName().equals(id)) {
                        File jsonFile1 = new File(file.getAbsolutePath() + "/model.json");
                        File jsonFile2 = new File(file2.getAbsolutePath() + "/model.json");
                        ArchimateModelNew jsonModel1 = mapper.readValue(jsonFile1, ArchimateModelNew.class);
                        ArchimateModelNew jsonModel2 = mapper.readValue(jsonFile2, ArchimateModelNew.class);

                        if (!jsonModel1.getDuplicates().isEmpty() || !jsonModel2.getDuplicates().isEmpty()
                                || !jsonModel1.getTags().isEmpty() || !jsonModel2.getTags().isEmpty()) {
                            continue;
                        }
                        if (jsonModel1.getRepository().equals(jsonModel2.getRepository())) {
                            System.err.printf("DUPLICATE: %s AND %s\n", file.getName(), file2.getName());
                            //System.err.printf("REMOVING DUPLICATE: %s format=%s\n", file.getName(), jsonModel1.getSourceFormat());
                            removeModel(file.getName());
                        }
                    }
                }
            }
        }
    }

    // @ShellMethod(value = "Remove Model", key = "removeModel")
    public void removeModel(String modelId) throws IOException {
        File[] files = new File("/Users/philipp/projects/EAModelSet/dataset/processed-models/").listFiles(File::isDirectory);
        ObjectMapper mapper = new ObjectMapper();
        for (File file : files) {
            if (file.getName().equals(modelId)) {
                File jsonFile = new File(file.getAbsolutePath() + "/model.json");
                ArchimateModelNew jsonModel = mapper.readValue(jsonFile, ArchimateModelNew.class);
                String sourcePath = jsonModel.getSourceFile();
                File sourceFile = new File("/Users/philipp/projects/EAModelSet/" + sourcePath);

                boolean deleted = sourceFile.delete();
                if (!deleted) {
                    System.err.printf("Error! Failed to delete source file '%s'!\n", sourcePath);
                }
                System.out.printf("Deleting model directory for '%s'...\n", file.getName());
                FileUtils.deleteDirectory(file);
                System.out.println("Deleted!");
            }
        }
    }

    // @ShellMethod(value = "Update Formats", key = "updateFormats")
    public void updateFormats(@Option String modelDir) throws IOException {
        File[] files = new File(modelDir).listFiles(File::isDirectory);
        for (File file : files) {
            ObjectMapper mapper = new ObjectMapper();
            File jsonFile = new File(file.getAbsolutePath() + "/model.json");
            ArchimateModel jsonModel = mapper.readValue(jsonFile, ArchimateModel.class);
            jsonModel.setFormats(new HashSet<>());
            jsonModel.getFormats().add("JSON");
            if (new File(file.getAbsolutePath() + "/model.xml").exists()) {
                jsonModel.getFormats().add("XML");
            }
            if (new File(file.getAbsolutePath() + "/model.archimate").exists()) {
                jsonModel.getFormats().add("ARCHIMATE");
            }
            File csvDir = new File(file.getAbsolutePath() + "/csv");
            if (csvDir.exists() && csvDir.listFiles() != null) {
                jsonModel.getFormats().add("CSV");
            }
            mapper.writeValue(jsonFile, jsonModel);
        }
    }
}

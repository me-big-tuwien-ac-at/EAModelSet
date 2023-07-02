package me.big.cli.app.commands;

import com.fasterxml.jackson.databind.ObjectMapper;
import me.big.cli.app.model.ArchimateModel;
import me.big.cli.app.util.FileUtils;
import org.springframework.shell.command.annotation.Option;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

import java.io.File;
import java.io.IOException;
import java.util.HashSet;

@ShellComponent
public class ModifyCommands {

    @ShellMethod(value = "Update Formats", key = "updateFormats")
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

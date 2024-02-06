package me.big.cli.app.commands;

import com.fasterxml.jackson.databind.ObjectMapper;
import me.big.cli.app.model.ArchimateModelNew;
import me.big.cli.app.util.ArchiCliUtils;
import me.big.cli.app.util.FileUtils;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;

import java.io.File;
import java.io.IOException;

@ShellComponent
public class ModificationCommands {

    @ShellMethod(value = "Add diagrams to the models in the dataset (as PNG)", key = "addImages")
    public void addImages() throws IOException {
        File modelDir = FileUtils.getDirFile("/Users/philipp/projects/EAModelSet/dataset/processed-models/910d7207-bc6c-4df3-812c-17365ac27a98");
        File jsonFile = FileUtils.getRelativeFile(modelDir, "model.json");
        ObjectMapper mapper = new ObjectMapper();
        ArchimateModelNew jsonModel = mapper.readValue(jsonFile, ArchimateModelNew.class);
        ArchiCliUtils.exportPng(modelDir, new File(jsonModel.getSourceFile()));
    }
}

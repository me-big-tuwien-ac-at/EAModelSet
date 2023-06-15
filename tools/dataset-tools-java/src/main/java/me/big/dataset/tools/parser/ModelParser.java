package me.big.dataset.tools.parser;

import lombok.extern.slf4j.Slf4j;
import me.big.dataset.tools.model.ArchimateModel;

import java.io.File;

@Slf4j
public class ModelParser {

    private ModelParser() { }

    public static ArchimateModel parseModel(File file) {
        ArchimateModel model;
        if (file.getName().endsWith(".xml")) {
            model = XmlFileParser.parseArchimateModel(file);
        } else if (file.getName().endsWith(".archimate")) {
            model = ArchimateFileParser.parseArchimateModel(file);
        } else {
            log.error("ERROR! Unknown file extension in '{}'", file.getName());
            return null;
        }
        return model;
    }
}

package me.big.cli.app.parser;

import lombok.extern.slf4j.Slf4j;
import me.big.cli.app.model.ParsedModel;
import java.io.File;

@Slf4j
public final class ModelParser {

    private ModelParser() { }

    public static ParsedModel parseModel(File file) {
        ParsedModel model;
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

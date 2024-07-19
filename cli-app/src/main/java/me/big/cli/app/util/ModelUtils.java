package me.big.cli.app.util;

import com.github.pemistahl.lingua.api.Language;
import com.github.pemistahl.lingua.api.LanguageDetector;
import com.github.pemistahl.lingua.api.LanguageDetectorBuilder;
import me.big.cli.app.model.ArchimateModelNew;
import me.big.cli.app.model.ParsedModel;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public final class ModelUtils {

    public static final String MODELSET_URI = "https://me.big.tuwien.ac.at/EAModelSet/";

    private ModelUtils() { }

    public static ArchimateModelNew createJsonModelFrom(ParsedModel parsedModel) {
        return ArchimateModelNew.builder()
                .identifier(MODELSET_URI + parsedModel.getId())
                .archimateId(parsedModel.getId())
                .name(parsedModel.getName())
                .description(parsedModel.getDocumentation())
                .formats(new ArrayList<>(List.of("JSON")))
                .source("")
                .repository("")
                .license("")
                .sourceFile(FileUtils.formatFileName(parsedModel.getFile()))
                .sourceFormat(parsedModel.getFormat())
                .timestamp(new Date())
                .tags(new ArrayList<>())
                .duplicates(new ArrayList<>())
                .language("")
                .elements(parsedModel.getElements())
                .relationships(parsedModel.getRelationships())
                .views(parsedModel.getViews())
                .build();
    }

    public static void setSource(ArchimateModelNew model, File file) throws IOException {
        // set source depending on raw-data file path
        if (file.getCanonicalPath().contains("/github/")) {
            model.setSource("GitHub");
        } else if (file.getCanonicalPath().contains("/genmymodel/")) {
            model.setSource("GenMyModel");
        } else if (file.getCanonicalPath().contains("/other/")) {
            model.setSource("Other");
        } else {
            System.err.printf("WARNING: unknown source path '%s' for model id '%s'!%n", file.getCanonicalPath(), model.getArchimateId());
            model.setSource("Unknown");
        }
    }

    public static void setFormats(ArchimateModelNew model, File modelDir) {
        // TODO: check if files are present and add corresponding format to list
        /*
        if (new File(modelDir, "model.archimate").exists()) {
            model.getFormats().add("ARCHIMATE");
        }
        if (new File(modelDir, "model.xml").exists()) {
            model.getFormats().add("XML");
        }
        File csvDir = new File(modelDir, "csv");
        if (csvDir.isDirectory() && csvDir.listFiles() != null) {
            model.getFormats().add("CSV");
        }
        */
        model.setFormats(new ArrayList<>(List.of("ARCHIMATE", "XML", "CSV", "JSON")));
    }

    public static void setLanguage(ArchimateModelNew model) {
        // use merged element names as text for language detection
        StringBuilder mergedText = new StringBuilder();
        model.getElements().forEach(e -> mergedText.append(e.getName()).append(" "));
        // exclude latin and esperanto to avoid false results
        LanguageDetector detector = LanguageDetectorBuilder.fromAllLanguagesWithout(Language.LATIN, Language.ESPERANTO).build();
        Language detectedLanguage = detector.detectLanguageOf(mergedText.toString());
        model.setLanguage(String.valueOf(detectedLanguage.getIsoCode639_1()).toLowerCase());
        // final Map<Language, Double> confidenceValues = detector.computeLanguageConfidenceValues(mergedText);
    }
}

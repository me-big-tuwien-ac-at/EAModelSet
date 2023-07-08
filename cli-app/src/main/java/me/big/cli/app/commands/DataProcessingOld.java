package me.big.cli.app.commands;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.pemistahl.lingua.api.Language;
import com.github.pemistahl.lingua.api.LanguageDetector;
import com.github.pemistahl.lingua.api.LanguageDetectorBuilder;
import me.big.cli.app.model.ArchimateElement;
import me.big.cli.app.model.ArchimateModel;
import me.big.cli.app.model.ParsedModel;
import me.big.cli.app.parser.ModelParser;
import me.big.cli.app.util.FileUtils;
import org.springframework.shell.command.annotation.Option;
// import org.springframework.shell.standard.ShellComponent;
// import org.springframework.shell.standard.ShellMethod;
import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;

// @ShellComponent()
public class DataProcessingOld {


    // @ShellMethod(value = "Process raw model data into the dataset structure", key = "process")
    public void process(@Option String sourceFolder, @Option String targetFolder) {
        Path path = Paths.get(sourceFolder);
        // get raw model files (ending in .archimate or .xml)
        List<File> rawDataFiles = FileUtils.mergeFiles(
                FileUtils.findFiles(path, ".xml"),
                FileUtils.findFiles(path, ".archimate")
        );
        System.out.printf("%d models found in folder '%s'%n", rawDataFiles.size(), sourceFolder);

        Set<String> storedIds = new HashSet<>();
        AtomicInteger count = new AtomicInteger(0);
        for (File file : rawDataFiles) {
            System.out.printf("Processing file #%d / %d': '%s'...", count.incrementAndGet(), rawDataFiles.size(), file.getName());
            // parse model
            ParsedModel parsedModel = ModelParser.parseModel(file);
            if (parsedModel == null) {
                System.err.printf("Error while parsing model! Skipping file: '%s'", file.getPath());
                continue;
            }
            if (parsedModel.getElements().size() < 10) {
                System.out.println("Model has less than 10 elements, skipping file!");
                continue;
            }
            File modelDir = new File(targetFolder + "/" + parsedModel.getId() + "/");

            // CHECK DUPLICATE ID
            if (storedIds.contains(parsedModel.getId())) {
                ArchimateModel dupModel = getJsonModel(modelDir);
                if (dupModel != null) {
                    dupModel.getDuplicates().add(formatFileName(parsedModel.getFile()));
                    dupModel.getTags().add("DUPLICATE");
                    storeJsonModelFile(modelDir, dupModel);
                }
                continue;
            }

            // create model directory
            if (!modelDir.exists()) {
                boolean createdDir = modelDir.mkdirs();
                if (!createdDir) {
                    System.err.println("Error creating directory!");
                    continue;
                }
            }

            // store source model (i.e. .xml or .archimate)
            storeSourceModel(modelDir, parsedModel, file);
            // export to other archimate format (i.e. archimate -> xml, xml -> archimate) and CSV
            exportModel(modelDir, parsedModel, file);

            // initialize JSON model
            ArchimateModel jsonModel = ArchimateModel.builder()
                    .identifier("https://me.big.tuwien.ac.at/EAModelSet/" + parsedModel.getId())
                    .archimateId(parsedModel.getId())
                    .name(parsedModel.getName())
                    .description(parsedModel.getDocumentation())
                    .formats(new HashSet<>(Set.of("JSON")))
                    .source("")
                    .sourceFile(formatFileName(parsedModel.getFile()))
                    .sourceFormat(parsedModel.getFormat())
                    .timestamp(new Date())
                    .tags(new HashSet<>())
                    .duplicates(new HashSet<>())
                    .language("")
                    .elements(parsedModel.getElements())
                    .relationships(parsedModel.getRelationships())
                    .views(parsedModel.getViews())
                    .build();
            // infer additional properties
            setSource(jsonModel, file);
            setFormats(jsonModel, modelDir);
            if (parsedModel.isHasWarning()) {
                jsonModel.getTags().add("WARNING");
            }
            setLanguage(jsonModel);

            File jsonFile = storeJsonModelFile(modelDir, jsonModel);
            if (jsonFile != null) {
                storedIds.add(parsedModel.getId());
            }
        }
    }

    private void setSource(ArchimateModel model, File file) {
        try {
            if (file.getCanonicalPath().contains("/github/")) {
                model.setSource("GitHub");
            } else if (file.getCanonicalPath().contains("/genmymodel/")) {
                model.setSource("GenMyModel");
            } else if (file.getCanonicalPath().contains("/other/")) {
                model.setSource("Other");
            } else {
                model.setSource("Unknown");
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void setFormats(ArchimateModel model, File modelDir) {
        // check if files are present and add corresponding format to list
        File[] archimateFile = modelDir.listFiles(f -> f.getName().equals("model.archimate"));
        if (archimateFile != null && archimateFile.length > 0) {
            model.getFormats().add("ARCHIMATE");
        }
        File[] xmlFile = modelDir.listFiles(f -> f.getName().equals("model.xml"));
        if (xmlFile != null && xmlFile.length > 0) {
            model.getFormats().add("XML");
        }
        File csvDir = new File(modelDir.getAbsolutePath() + "/csv");
        if (csvDir.exists() && csvDir.listFiles() != null) {
            model.getFormats().add("CSV");
        }
    }

    private void setLanguage(ArchimateModel model) {
        String mergedText = "";
        for (ArchimateElement element : model.getElements()) {
            mergedText += element.getName() + " ";
        }
        final LanguageDetector detector = LanguageDetectorBuilder.fromAllLanguages().build();
        final Language detectedLanguage = detector.detectLanguageOf(mergedText);
        model.setLanguage(String.valueOf(detectedLanguage.getIsoCode639_1()).toLowerCase());
        // final Map<Language, Double> confidenceValues = detector.computeLanguageConfidenceValues(mergedText);
    }

    private void storeSourceModel(File modelDir, ParsedModel parsedModel, File sourceFile) {
        try {
            File modelFile = new File(modelDir.getCanonicalPath() + "/model." + parsedModel.getFormat().toLowerCase());
            org.apache.commons.io.FileUtils.copyFile(sourceFile, modelFile);
        } catch (IOException e) {
            e.printStackTrace();
            System.err.println("Error copying source model file to model directory!");
        }
    }

    private void exportModel(File modelDir, ParsedModel parsedModel, File file) {
        try {
            // Process process = null;
            if (parsedModel.getFormat().equals("ARCHIMATE")) {
                Runtime.getRuntime().exec("/Applications/Archi.app/Contents/MacOS/Archi -application com.archimatetool.commandline.app -consoleLog -nosplash --loadModel \""
                        + file.getAbsolutePath() + "\" "
                        + "--xmlexchange.export \"" + modelDir.getAbsolutePath() + "/model.xml\" "
                        + "--csv.export \"" + modelDir.getAbsolutePath() + "/csv/\" ");
            } else if (parsedModel.getFormat().equals("XML")) {
                System.out.println(parsedModel.getName());
                Runtime.getRuntime().exec("/Applications/Archi.app/Contents/MacOS/Archi -application com.archimatetool.commandline.app -consoleLog -nosplash --xmlexchange.import \""
                        + file.getAbsolutePath() + "\" "
                        + "--saveModel \"" + modelDir.getAbsolutePath() + "/model.archimate\" "
                        + "--csv.export \"" + modelDir.getAbsolutePath() + "/csv/\" ");
            }
            /*if (process != null) {
                BufferedReader in = new BufferedReader(new InputStreamReader(process.getInputStream()));
                String inputLine;
                while ((inputLine = in.readLine()) != null) {
                    System.out.println(inputLine);
                }
                in.close();
            }*/
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private File storeJsonModelFile(File modelDir, ArchimateModel model) {
        if (!validateDirectory(modelDir)) {
            return null;
        }
        ObjectMapper mapper = new ObjectMapper();
        try {
            File jsonFile = new File(modelDir.getCanonicalPath() + "/model.json");
            // serialize Java object into JSON file
            mapper.writeValue(jsonFile, model);
            return jsonFile;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    private ArchimateModel getJsonModel(File modelDir) {
        if (!validateDirectory(modelDir)) {
            return null;
        }
        File[] files = modelDir.listFiles(f -> f.getName().equals("model.json"));
        if (files != null && files.length == 1) {
            ObjectMapper objectMapper = new ObjectMapper();
            try {
                return objectMapper.readValue(files[0], ArchimateModel.class);
            } catch (IOException e) {
                e.printStackTrace();
            }
        } else {
            System.err.println("No model.json file found!");
        }
        return null;
    }

    private boolean validateDirectory(File dir) {
        if (!dir.exists()) {
            System.err.printf("Directory '%s' does not exist!", dir);
            return false;
        }
        if (!dir.isDirectory()) {
            System.err.printf("Not a directory '%s'!", dir);
            return false;
        }
        return true;
    }

    private String formatFileName(String file) {
        if (file.contains("/raw-data")) {
            return file.substring(file.indexOf("/raw-data") + 1);
        } else {
            return file;
        }
    }

}

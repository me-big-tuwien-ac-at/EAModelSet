package me.big.cli.app.commands;

import com.fasterxml.jackson.databind.ObjectMapper;
import me.big.cli.app.model.ArchimateModelNew;
import me.big.cli.app.service.ModelService;
import me.big.cli.app.util.ArchiCliUtils;
import me.big.cli.app.util.FileUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.Availability;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;
import org.springframework.shell.standard.ShellMethodAvailability;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.List;

@ShellComponent
public class ModificationCommands {

    private final ModelService modelService;
    private final DataProcessing dataProcessing;

    @Autowired
    public ModificationCommands(ModelService modelService, DataProcessing dataProcessing) {
        this.modelService = modelService;
        this.dataProcessing = dataProcessing;
    }

    @ShellMethod(value = "Add diagrams to the models in the dataset (as PNG)", key = "addImages")
    public void addImages() throws IOException {
        File modelDir = FileUtils.getDirFile("/Users/philipp/projects/EAModelSet/dataset/processed-models/910d7207-bc6c-4df3-812c-17365ac27a98");
        File jsonFile = FileUtils.getRelativeFile(modelDir, "model.json");
        ObjectMapper mapper = new ObjectMapper();
        ArchimateModelNew jsonModel = mapper.readValue(jsonFile, ArchimateModelNew.class);
        ArchiCliUtils.exportPng(modelDir, new File(jsonModel.getSourceFile()));
    }

    @ShellMethod(value = "Update dataset (custom code)", key = "update")
    @ShellMethodAvailability("availabilityCheck")
    public void updateDataset() throws IOException {
        List<ArchimateModelNew> models = modelService.findAll();
        // List<ArchimateModelNew> modelsSubset = models.subList(918, models.size());
        // System.out.println(models);

        File outputDir = FileUtils.getDirFile("/Users/philipp/projects/EAModelSet/dataset/diagrams");
        File intermediateOutputDir = FileUtils.getDirFile("/Users/philipp/projects/EAModelSet/dataset");
        // ObjectMapper mapper = new ObjectMapper();
        int count = 1;
        for (ArchimateModelNew model : models) {
            System.out.println("-------- " + count + " --------");
            File imageDir = new File(intermediateOutputDir.getAbsolutePath() + "/html-output/" + model.getArchimateId() + "/images/");

            File[] pngFiles = imageDir.listFiles();
            if (pngFiles != null && pngFiles.length > 0) {
                count++;
                continue;
            }


            File archiModel = new File("/Users/philipp/projects/EAModelSet/dataset/processed-models/" + model.getArchimateId() + "/model.archimate");
            Process process = Runtime.getRuntime().exec("/Applications/Archi.app/Contents/MacOS/Archi -application com.archimatetool.commandline.app -consoleLog -nosplash --loadModel \""
                    + archiModel.getAbsolutePath() + "\" "
                    + "--html.createReport \"" + intermediateOutputDir.getAbsolutePath() + "/html-output/\" ");
            if (process != null) {
                BufferedReader in = new BufferedReader(new InputStreamReader(process.getInputStream()));
                String inputLine;
                while ((inputLine = in.readLine()) != null) {
                    System.out.println(inputLine);
                }
                in.close();
            }
            count++;
            //File imagesDir = new File(modelDir.getAbsolutePath() + "/html-output/" + modelDir.getName() + "/images/");

            // List<File> pngFiles = FileUtils.findFiles(imagesDir.toPath(), ".png");
            //File pngDir = new File(modelDir.getAbsolutePath(), "png/");
            //pngDir.mkdirs();
            //org.apache.commons.io.FileUtils.copyDirectory(imagesDir, pngDir);

            //File outputDir = new File(modelDir.getAbsolutePath() + "/html-output/");
            //org.apache.commons.io.FileUtils.deleteDirectory(outputDir);
        }
    }



    public Availability availabilityCheck() {
        return dataProcessing.isLoaded()
                ? Availability.available()
                : Availability.unavailable("Dataset is not loaded!");
    }
}

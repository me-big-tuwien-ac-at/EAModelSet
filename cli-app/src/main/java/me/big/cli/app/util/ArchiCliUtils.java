package me.big.cli.app.util;

import me.big.cli.app.model.ParsedModel;
import org.jline.utils.OSUtils;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.file.Path;
import java.util.List;

public final class ArchiCliUtils {

    private ArchiCliUtils() { }


    public static void exportPng(File modelDir, File file) throws IOException {
        Process process = Runtime.getRuntime().exec("/Applications/Archi.app/Contents/MacOS/Archi -application com.archimatetool.commandline.app -consoleLog -nosplash --loadModel \""
                + file.getAbsolutePath() + "\" "
                + "--html.createReport \"" + modelDir.getAbsolutePath() + "/html-output/\" ");
        if (process != null) {
            BufferedReader in = new BufferedReader(new InputStreamReader(process.getInputStream()));
            String inputLine;
            while ((inputLine = in.readLine()) != null) {
                System.out.println(inputLine);
            }
            in.close();
        }

        File imagesDir = new File(modelDir.getAbsolutePath() + "/html-output/" + modelDir.getName() + "/images/");

        // List<File> pngFiles = FileUtils.findFiles(imagesDir.toPath(), ".png");
        File pngDir = new File(modelDir.getAbsolutePath(), "png/");
        pngDir.mkdirs();
        org.apache.commons.io.FileUtils.copyDirectory(imagesDir, pngDir);

        File outputDir = new File(modelDir.getAbsolutePath() + "/html-output/");
        org.apache.commons.io.FileUtils.deleteDirectory(outputDir);
    }

    public static void exportModel(File modelDir, ParsedModel parsedModel, File file) throws IOException {
        // TODO: support other operating systems (windows, linux)

        /*if (!SystemUtils.IS_OS_MAC_OSX) {
            System.err.println("ERROR: OS currently not supported!");
            return;
        }*/
        // this breaks if not using macOS (different Archi path), also breaks if Archi is not installed
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
        // print console output
        /*
        if (process != null) {
                BufferedReader in = new BufferedReader(new InputStreamReader(process.getInputStream()));
                String inputLine;
                while ((inputLine = in.readLine()) != null) {
                    System.out.println(inputLine);
                }
                in.close();
         }*/
    }
}

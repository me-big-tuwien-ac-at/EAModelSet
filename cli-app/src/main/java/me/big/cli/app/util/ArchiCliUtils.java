package me.big.cli.app.util;

import me.big.cli.app.model.ParsedModel;
import java.io.File;
import java.io.IOException;

public final class ArchiCliUtils {

    private ArchiCliUtils() { }

    public static void exportModel(File modelDir, ParsedModel parsedModel, File file) throws IOException {
        // TODO: support other operating systems (windows, linux)
        // this breaks if not using macOS
        // also breaks if Archi is not installed

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

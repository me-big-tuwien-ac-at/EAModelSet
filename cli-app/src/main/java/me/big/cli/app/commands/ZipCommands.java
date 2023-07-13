package me.big.cli.app.commands;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.Availability;
import org.springframework.shell.command.annotation.Option;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;
import org.springframework.shell.standard.ShellMethodAvailability;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.Optional;
import java.util.zip.ZipEntry;
import java.util.zip.ZipOutputStream;

@ShellComponent
public class ZipCommands {

    private final DataProcessing dataProcessing;

    @Autowired
    public ZipCommands(DataProcessing dataProcessing) {
        this.dataProcessing = dataProcessing;
    }

    @ShellMethod(value = "Create a ZIP archive of the loaded dataset directory", key = "zip")
    @ShellMethodAvailability("availabilityCheck")
    public void zip(@Option String targetFilePath) throws IOException {
        File datasetDir = dataProcessing.getDatasetDir();
        zip(targetFilePath, datasetDir.getCanonicalPath());
    }

    @ShellMethod(value = "Create a ZIP archive of a give directory", key = "zipDir")
    public void zip(@Option String targetFilePath, @Option String dirPath) throws IOException {
        // validate paths provided as arguments
        if (!targetFilePath.endsWith(".zip")) {
            System.err.printf("ERROR, invalid target file path: %s%n", targetFilePath);
            return;
        }
        if (new File(targetFilePath).exists()) {
            System.err.printf("ERROR, target file already exists: %s%n", targetFilePath);
            return;
        }
        File dirToZip = new File(dirPath);
        if (!dirToZip.isDirectory()) {
            System.err.printf("ERROR, invalid directory path: %s%n", dirPath);
            return;
        }

        System.out.println("Creating zip archive...");
        FileOutputStream fos = new FileOutputStream(targetFilePath);
        ZipOutputStream zipOut = new ZipOutputStream(fos);

        zipFile(dirToZip, dirToZip.getName(), zipOut);
        zipOut.close();
        fos.close();

        // verify zip was created
        if (new File(targetFilePath).exists()) {
            System.out.println("Done!");
        } else {
            System.err.println("ERROR, failed to create zip archive!");
        }
    }

    private static void zipFile(File fileToZip, String fileName, ZipOutputStream zipOut) throws IOException {
        // adapted from: https://www.baeldung.com/java-compress-and-uncompress
        if (fileToZip.isHidden()) {
            return;
        }
        if (fileToZip.isDirectory()) {
            if (fileName.endsWith("/")) {
                zipOut.putNextEntry(new ZipEntry(fileName));
            } else {
                zipOut.putNextEntry(new ZipEntry(fileName + "/"));
            }
            zipOut.closeEntry();
            File[] children = Optional.ofNullable(fileToZip.listFiles()).orElse(new File[]{});
            for (File childFile : children) {
                zipFile(childFile, fileName + "/" + childFile.getName(), zipOut);
            }
            return;
        }
        try (FileInputStream fis = new FileInputStream(fileToZip)) {
            ZipEntry zipEntry = new ZipEntry(fileName);
            zipOut.putNextEntry(zipEntry);
            byte[] bytes = new byte[1024];
            int length;
            while ((length = fis.read(bytes)) >= 0) {
                zipOut.write(bytes, 0, length);
            }
        }
    }

    public Availability availabilityCheck() {
        return dataProcessing.isLoaded()
                ? Availability.available()
                : Availability.unavailable("Model is not loaded into database!");
    }
}

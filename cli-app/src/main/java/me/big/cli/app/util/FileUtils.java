package me.big.cli.app.util;

import com.fasterxml.jackson.databind.ObjectMapper;
import me.big.cli.app.model.ArchimateModelNew;
import me.big.cli.app.model.ParsedModel;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public final class FileUtils {

    private FileUtils() { }

    public static File getFile(String filePath) {
        File file = new File(filePath);
        if (file.exists() && !file.isDirectory()) {
            return file;
        } else {
            throw new IllegalArgumentException(String.format("ERROR: file '%s' not found!%n", filePath));
        }
    }

    public static File getDirFile(String dirPath) {
        File dirFile = new File(dirPath);
        if (dirFile.isDirectory()) {
            return dirFile;
        } else {
            throw new IllegalArgumentException(String.format("ERROR: directory '%s' not found!%n", dirPath));
        }
    }

    public static File getRelativeFile(File dir, String fileName) {
        File file = new File(dir, fileName);
        if (file.exists() && !file.isDirectory()) {
            return file;
        } else {
            throw new IllegalArgumentException(String.format(
                    "ERROR: file '%s' does not exist in '%s'!%n", fileName, dir.getAbsolutePath()
            ));
        }
    }

    public static File getRelativeDir(File dir, String dirName) {
        File file = new File(dir, dirName);
        if (dir.isDirectory()) {
            return file;
        } else {
            throw new IllegalArgumentException(String.format(
                    "ERROR: directory '%s' does not exist in '%s'!%n", dirName, dir.getAbsolutePath()
            ));
        }
    }

    public static List<File> getDirs(String dir) {
        File modelDirFile = FileUtils.getDirFile(dir);
        File[] files = modelDirFile.listFiles(File::isDirectory);
        if (files != null && files.length > 0) {
            return Arrays.asList(files);
        } else {
            throw new IllegalArgumentException(String.format("ERROR: directory '%s' is empty!", dir));
        }
    }

    public static File getAndVerifyModelFile(String modelFilePath) {
        // verify file extension is .xml or .archimate
        if (!modelFilePath.endsWith(".xml") && !modelFilePath.endsWith(".archimate")) {
            System.err.println("ERROR, invalid file extension! Model must be a .xml or .archimate file.");
            return null;
        }
        File modelFile = new File(modelFilePath);
        if (!modelFile.exists()) {
            System.err.println("ERROR, file does not exist!");
            return null;
        } else {
            return modelFile;
        }
    }

    public static void storeSourceModel(File modelDir, ParsedModel parsedModel, File sourceFile) throws IOException {
        File modelFile = new File(modelDir.getCanonicalPath() + "/model." + parsedModel.getFormat().toLowerCase());
        org.apache.commons.io.FileUtils.copyFile(sourceFile, modelFile);
    }

    public static File storeJsonModelFile(File modelDir, ArchimateModelNew model) {
        ObjectMapper mapper = new ObjectMapper();
        try {
            File jsonFile = new File(modelDir.getCanonicalPath() + "/model.json");
            mapper.writeValue(jsonFile, model);
            return jsonFile;
        } catch (IOException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static boolean validateDirectory(File dir) {
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

    public static List<File> findFiles(Path path, String fileExtension) {
        if (!Files.isDirectory(path)) {
            throw new IllegalArgumentException("Path must be a directory!");
        }
        List<File> result;
        try (Stream<Path> walk = Files.walk(path)) {
            result = walk
                    .filter(p -> !Files.isDirectory(p))
                    .map(p -> p.toString().toLowerCase())
                    .filter(f -> f.endsWith(fileExtension))
                    .map(File::new)
                    .toList();
        } catch(IOException e) {
            e.printStackTrace();
            result = new ArrayList<>();
        }
        return result;
    }

    public static List<File> mergeFiles(List<File> files1, List<File> files2) {
        List<File> merged = new ArrayList<>();
        merged.addAll(files1);
        merged.addAll(files2);
        return merged;
    }

    public static String formatFileName(String file) {
        if (file.contains("/raw-data")) {
            return file.substring(file.indexOf("/raw-data") + 1);
        } else {
            return file;
        }
    }
}

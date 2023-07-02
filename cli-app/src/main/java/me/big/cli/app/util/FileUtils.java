package me.big.cli.app.util;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Stream;

public final class FileUtils {

    private FileUtils() { }

    public static File[] getModelDirs(String dir) {
        File modelDirFile = getDirFile(dir);
        File[] files = modelDirFile.listFiles(File::isDirectory);
        if (files == null || files.length == 0) {
            throw new IllegalArgumentException("Directory is empty!");
        }
        return files;
    }

    public static File getDirFile(String dir) {
        File dirFile = new File(dir);
        if (!dirFile.isDirectory()) {
            throw new IllegalArgumentException("Not a directory!");
        }
        return dirFile;
    }

    public static List<File> findFiles(Path path, String fileExtension) {
        if (!Files.isDirectory(path)) {
            throw new IllegalArgumentException("Path must be a directory!");
        }
        List<File> result;
        try (Stream<Path> walk = Files.walk(path)) {
            result = walk
                    .filter(p -> !Files.isDirectory(p))
                    // this is a path, not string,
                    // this only test if path end with a certain path
                    //.filter(p -> p.endsWith(fileExtension))
                    // convert path to string first
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
}

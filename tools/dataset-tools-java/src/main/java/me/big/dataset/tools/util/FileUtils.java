package me.big.dataset.tools.util;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public final class FileUtils {

    private FileUtils() { }

    public static String getFileHash(File file) {
        try {
            byte[] b = Files.readAllBytes(file.toPath());
            byte[] hash1 = MessageDigest.getInstance("MD5").digest(b);
            return Arrays.toString(hash1);
        } catch (IOException | NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }

    public static List<File> getFiles(String directory, String fileExtension) {
        File folder = new File(directory);
        File[] files = folder.listFiles((dir, name) -> name.toLowerCase().endsWith("." + fileExtension));
        return files == null ? new ArrayList<>()
                : List.of(files);
    }

    public static List<File> mergeFiles(List<File> files1, List<File> files2) {
        List<File> merged = new ArrayList<>();
        merged.addAll(files1);
        merged.addAll(files2);
        return merged;
    }
}

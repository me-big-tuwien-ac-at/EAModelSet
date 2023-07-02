package me.big.cli.app.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.File;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
@Slf4j
public class DatasetService {

    private static final String DATASET_DEFAULT_DIR = "/Users/philipp/dataset-test/";
    private static final String DATASET_MODELS_DEFAULT_DIR = "/Users/philipp/dataset-test/individual-models/";


    public List<File> getJsonFiles() {
        List<File> modelDirs = getModelDirs();
        List<File> jsonFiles = new ArrayList<>();
        for (File dir : modelDirs) {
            File[] filteredFiles = dir.listFiles(f -> f.getName().endsWith(".json"));
            // should have exactly one .json file
            if (filteredFiles == null || filteredFiles.length != 1) {
                log.error("ERROR - INVALID DIRECTORY: {}", dir.getName());
            } else {
                jsonFiles.add(filteredFiles[0]);
            }
        }
        return jsonFiles;
    }

    private List<File> getModelDirs () {
        return Arrays.asList(new File(DATASET_MODELS_DEFAULT_DIR).listFiles(File::isDirectory));
    }

}

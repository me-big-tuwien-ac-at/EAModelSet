package me.big.dataset.tools;

import me.big.dataset.tools.json.JsonSerializer;
import me.big.dataset.tools.util.DatasetUtils;

import java.io.File;

public class Main {
    public static void main(String[] args) {
        JsonSerializer jsonSerializer = new JsonSerializer();

        // for each model, create a JSON file in dataset/individual-models/
        File targetDir = new File(DatasetUtils.DATASET_PATH + "individual-models/");
        // jsonSerializer.modelsToIndividualFiles(targetDir, DatasetUtils.getRawDataFiles());

        // create single json, containing all models in dataset/
        File allModelsFile = new File(DatasetUtils.DATASET_PATH + "models.json");
        // jsonSerializer.jsonModelsToSingleFile(allModelsFile, DatasetUtils.getIndividualJsonFiles());
    }
}
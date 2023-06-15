package me.big.dataset.tools.json;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import me.big.dataset.tools.model.ArchimateModel;
import me.big.dataset.tools.model.ModelInfo;
import me.big.dataset.tools.parser.ModelParser;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

@Slf4j
public class JsonSerializer {

    public JsonSerializer() { }

    public void jsonModelsToSingleFile(File targetFile, List<File> jsonFiles) {
        if (targetFile.isDirectory() || !targetFile.getName().endsWith("json")) {
            log.error("ERROR! Target not a JSON file: {}", targetFile);
            return;
        }

        Map<String, Long> idMap = new HashMap<>();
        List<ModelInfo> modelInfos = new ArrayList<>();
        ObjectMapper mapper = new ObjectMapper();
        for (File file : jsonFiles) {
            try {
                ArchimateModel model = mapper.readValue(file, ArchimateModel.class);
                // TODO: -> full model (?)
                ModelInfo modelInfo = ModelInfo.builder()
                        .id(model.getId())
                        .name(model.getName())
                        .format(model.getFormat())
                        .tags(model.getTags())
                        .elementCount(model.getElements().size())
                        .relationshipCount(model.getRelationships().size())
                        .viewCount(model.getViews().size())
                        .build();
                modelInfos.add(modelInfo);
            } catch (IOException e) {
                log.error("Failed to load model from JSON file '{}'", file.getName());
                e.printStackTrace();
            }
        }
        log.info("Storing {} models into file {}...", modelInfos.size(), targetFile);
        try {
            mapper.writeValue(targetFile, modelInfos);
        } catch (IOException e) {
            e.printStackTrace();
        }
        log.info("Done!");
    }

    public void modelsToIndividualFiles(File targetDir, List<File> modelFiles) {
        if (!targetDir.isDirectory()) {
            log.error("ERROR! Target '{}' is not a directory!", targetDir);
            return;
        }

        Map<String, Long> idMap = new HashMap<>();
        AtomicInteger count = new AtomicInteger(0);

        for (File file : modelFiles) {
            log.info("Parsing model #{} from file '{}'", count.incrementAndGet(), file.getName());

            ArchimateModel model = ModelParser.parseModel(file);
            if (model == null) {
                log.error("ERROR! Failed to parse model in file '{}'. Skipping file...", file.getPath());
                continue;
            }

            String targetFileName = model.getId();
            if (idMap.containsKey(model.getId())) {
                // duplicate -> get new name for file by counting existing duplicates
                Long duplicateCount = idMap.get(model.getId());
                targetFileName += ("_" + duplicateCount);
                duplicateCount++;
                idMap.put(model.getId(), duplicateCount);

                // update model tags and id
                List<String> tags = model.getTags();
                if (tags == null) {
                    tags = new ArrayList<>();
                }
                tags.add("duplicate");
                model.setTags(tags);

                // TODO: also update element + relationship ids (maybe unnecessary and leave as is?)
                // model.setId(targetFileName);
            } else {
                idMap.put(model.getId(), 0L);
            }

            File jsonFile = new File(String.format("%s/%s.json", targetDir, targetFileName));
            ObjectMapper mapper = new ObjectMapper();
            try {
                // Serialize Java object into JSON file
                mapper.writeValue(jsonFile, model);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

    }
}

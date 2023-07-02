package me.big.cli.app.service;

import me.big.cli.app.model.ArchimateModel;
import me.big.cli.app.model.dataset.ModelInfo;
import me.big.cli.app.model.dataset.Stats;
import me.big.cli.app.repository.ModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class ModelService {

    private final ModelRepository modelRepository;

    @Autowired
    public ModelService(ModelRepository modelRepository) {
        this.modelRepository = modelRepository;
    }

    public void save(ArchimateModel model) {
        modelRepository.save(model);
    }

    public void deleteAll() {
        modelRepository.deleteAll();
    }

    public List<ModelInfo> findAllModelInfos() {
        return modelRepository.findAll().stream()
                .map(this::mapToModelInfo)
                .toList();
    }

    public List<ArchimateModel> findAll() {
        return modelRepository.findAll();
    }


    // ----------------------------------
    // ------------- Stats --------------
    // ----------------------------------

    public Long getTotalModels() {
        return modelRepository.count();
    }
    public Long getTotalElements() {
        return findAllModelInfos().stream().map(ModelInfo::getElementCount).reduce(0L, Long::sum);
    }
    public Long getTotalRelationships() {
        return findAllModelInfos().stream().map(ModelInfo::getRelationshipCount).reduce(0L, Long::sum);
    }
    public Long getTotalViews() {
        return findAllModelInfos().stream().map(ModelInfo::getViewCount).reduce(0L, Long::sum);
    }


    public Stats getLanguageStats() {
        Map<String, Long> languageCounts = findAllModelInfos().stream()
                .map(ModelInfo::getLanguage)
                .collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
        return Stats.builder()
                .title("Language Occurrence Count")
                .labels(languageCounts.keySet().stream().toList())
                .data(languageCounts.values().stream().toList())
                .build();
    }

    private ModelInfo mapToModelInfo(ArchimateModel jsonModel) {
        return ModelInfo.builder()
                .name(jsonModel.getName())
                .id(jsonModel.getArchimateId())
                .source(jsonModel.getSource())
                .language(jsonModel.getLanguage())
                .tags(jsonModel.getTags())
                .formats(jsonModel.getFormats())
                .duplicateCount(jsonModel.getDuplicates().size())
                .elementCount((long) jsonModel.getElements().size())
                .relationshipCount((long) jsonModel.getRelationships().size())
                .viewCount((long) jsonModel.getViews().size())
                .build();
    }

}

package me.big.cli.app.service;

import me.big.cli.app.model.ArchimateModelNew;
import me.big.cli.app.model.dataset.ModelInfo;
import me.big.cli.app.model.stats.Stats;
import me.big.cli.app.parser.util.ParserUtils;
import me.big.cli.app.repository.ModelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class ModelService {

    private final ModelRepository modelRepository;

    @Autowired
    public ModelService(ModelRepository modelRepository) {
        this.modelRepository = modelRepository;
    }

    public void save(ArchimateModelNew model) {
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

    public Optional<ArchimateModelNew> getModelById(String id) {
        return modelRepository.findById(id);
    }

    public List<ArchimateModelNew> findAll() {
        return modelRepository.findAll();
    }

    // ----------------------------------
    // ------------- Stats --------------
    // ----------------------------------

    public Long getTotalModels() {
        return (long) findAllModelInfos().size();
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
    public Optional<Long> getMinElementCount() {
        return findAllModelInfos().stream()
                .map(ModelInfo::getElementCount)
                .min(Long::compareTo);
    }
    public Optional<Long> getMinRelationshipCount() {
        return findAllModelInfos().stream()
                .map(ModelInfo::getRelationshipCount)
                .min(Long::compareTo);
    }
    public Optional<Long> getMinViewCount() {
        return findAllModelInfos().stream()
                .map(ModelInfo::getViewCount)
                .min(Long::compareTo);
    }
    public Optional<Long> getMaxElementCount() {
        return findAllModelInfos().stream()
                .map(ModelInfo::getElementCount)
                .max(Long::compareTo);
    }
    public Optional<Long> getMaxRelationshipCount() {
        return findAllModelInfos().stream()
                .map(ModelInfo::getRelationshipCount)
                .max(Long::compareTo);
    }
    public Optional<Long> getMaxViewCount() {
        return findAllModelInfos().stream()
                .map(ModelInfo::getViewCount)
                .max(Long::compareTo);
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
    public Stats getLayerOccurrenceFrequency() {
        Map<String, Long> frequencies = new HashMap<>();
        return null;
    }
    public Stats getElementOccurrenceFrequency() {
        Map<String, Long> frequencies = new HashMap<>();
        findAll().forEach(model -> model.getElements().forEach(element -> {
            if (frequencies.containsKey(element.getType())) {
                frequencies.put(element.getType(), frequencies.get(element.getType()) + 1);
            } else {
                frequencies.put(element.getType(), 1L);
            }
        }));
        List<String> labels = new ArrayList<>();
        List<Long> data = new ArrayList<>();
        List<String> colors = new ArrayList<>();
        frequencies.entrySet().stream()
                .filter(entry -> ParserUtils.isBusinessElement(entry.getKey()))
                .forEach(entry -> {
                    labels.add(entry.getKey());
                    data.add(entry.getValue());
                    colors.add("#ffffb5");
                });
        frequencies.entrySet().stream()
                .filter(entry -> ParserUtils.isApplicationElement(entry.getKey()))
                .forEach(entry -> {
                    labels.add(entry.getKey());
                    data.add(entry.getValue());
                    colors.add("#b5ffff");
                });
        frequencies.entrySet().stream()
                .filter(entry -> ParserUtils.isTechnologyElement(entry.getKey()))
                .forEach(entry -> {
                    labels.add(entry.getKey());
                    data.add(entry.getValue());
                    colors.add("#c9e7b7");
                });
        frequencies.entrySet().stream()
                .filter(entry -> ParserUtils.isImplementationMigrationElement(entry.getKey()))
                .forEach(entry -> {
                    labels.add(entry.getKey());
                    data.add(entry.getValue());
                    colors.add("#ffe0e0");
                });
        frequencies.entrySet().stream()
                .filter(entry -> ParserUtils.isMotivationElement(entry.getKey()))
                .forEach(entry -> {
                    labels.add(entry.getKey());
                    data.add(entry.getValue());
                    colors.add("#ccccff");
                });
        frequencies.entrySet().stream()
                .filter(entry -> ParserUtils.isStrategyElement(entry.getKey()))
                .forEach(entry -> {
                    labels.add(entry.getKey());
                    data.add(entry.getValue());
                    colors.add("#f5deaa");
                });
        frequencies.entrySet().stream()
                .filter(entry -> ParserUtils.isOtherElement(entry.getKey()))
                .forEach(entry -> {
                    labels.add(entry.getKey());
                    data.add(entry.getValue());
                    colors.add("#edcfe2");
                });
        return Stats.builder()
                .title("Element Occurrence Frequency")
                .labels(labels)
                .data(data)
                .bgColors(colors)
                .build();
    }
    public Stats getRelationshipOccurrenceFrequency() {
        Map<String, Long> frequencies = new HashMap<>();
        List<ArchimateModelNew> allModels = findAll();
        allModels.forEach(model -> model.getRelationships().forEach(rel -> {
            // handle 'Relationship' suffix
            if (rel.getType().endsWith("Relationship")) {
                rel.setType(rel.getType().substring(0, rel.getType().length() - 12));
            }
            // handle uk/us english differences
            if (rel.getType().equals("Realisation")) {
                rel.setType("Realization");
            } else if (rel.getType().equals("Specialisation")) {
                rel.setType("Specialization");
            }

            if (frequencies.containsKey(rel.getType())) {
                frequencies.put(rel.getType(), frequencies.get(rel.getType()) + 1);
            } else {
                frequencies.put(rel.getType(), 1L);
            }
        }));
        return Stats.builder()
                .title("Relationship Type Occurrence Frequency")
                .labels(frequencies.keySet().stream().toList())
                .data(frequencies.values().stream().toList())
                .build();
    }

    private ModelInfo mapToModelInfo(ArchimateModelNew jsonModel) {
        return ModelInfo.builder()
                .name(jsonModel.getName())
                .id(jsonModel.getArchimateId())
                .source(jsonModel.getSource())
                .repository(jsonModel.getRepository())
                .license(jsonModel.getLicense())
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

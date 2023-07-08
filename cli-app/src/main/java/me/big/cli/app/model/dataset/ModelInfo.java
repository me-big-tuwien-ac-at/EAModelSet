package me.big.cli.app.model.dataset;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ModelInfo {
    private String id;
    private String name;
    private String source;
    private String repository;
    private String license;
    private String language;
    private List<String> formats;
    private List<String> tags;
    private Integer duplicateCount;
    private Long elementCount;
    private Long relationshipCount;
    private Long viewCount;
}

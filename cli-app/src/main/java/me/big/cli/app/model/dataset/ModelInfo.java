package me.big.cli.app.model.dataset;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ModelInfo {
    private String id;
    private String name;
    private String source;
    private String language;
    private Set<String> formats;
    private Set<String> tags;
    private Integer duplicateCount;
    private Long elementCount;
    private Long relationshipCount;
    private Long viewCount;
}

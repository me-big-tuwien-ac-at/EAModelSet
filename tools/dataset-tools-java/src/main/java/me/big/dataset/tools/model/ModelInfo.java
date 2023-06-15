package me.big.dataset.tools.model;

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
    private String format;
    private List<String> tags;
    private Integer elementCount;
    private Integer relationshipCount;
    private Integer viewCount;
}

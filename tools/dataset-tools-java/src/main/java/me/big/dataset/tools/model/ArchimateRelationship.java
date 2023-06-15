package me.big.dataset.tools.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ArchimateRelationship {
    private String id;
    private String sourceId;
    private String targetId;
    private String type;
    private String name; // optional
    private String documentation; // optional
}

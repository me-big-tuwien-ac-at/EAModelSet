package me.big.cli.app.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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
    @JsonIgnore private String name; // optional
    @JsonIgnore private String documentation; // optional
}

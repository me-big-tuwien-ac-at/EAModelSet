package me.big.cli.app.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ParsedModel {
    private String id;
    private String name;
    private String documentation;
    private String file;
    private String format; // 'ARCHIMATE' or 'XML' (depending on parsed file extension)
    // private String source;
    private boolean hasWarning; // true if any errors/warnings occurred during parsing
    // NESTED ELEMENTS
    private List<ArchimateElement> elements;
    private List<ArchimateRelationship> relationships;
    private List<ArchimateView> views;
}

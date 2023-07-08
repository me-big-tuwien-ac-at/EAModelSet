package me.big.cli.app.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import java.util.Date;
import java.util.List;
import java.util.Set;

/**
 * OLD MODEL (currently not in use)
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document
public class ArchimateModel {
    // -- BASIC PROPS --
    @Id
    private String identifier;                          // me.big.tuwien.ac.at/EAModelSet/<archimateId>
    private String archimateId;                         // ID from parsed file
    private String name;
    private String description;                       // optional

    // -- SUPPLEMENTARY PROPS --
    private Set<String> formats;                       // [ JSON, ARCHIMATE, XML, CSV, PNG ]
    private String source;                              // GitHub / GenMyModel / Other
    private String sourceFile;                          // file model was parsed from  "/raw-data/aplicacion.archimate"
    private String sourceFormat;                        // ARCHIMATE / XML
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private Date timestamp;                             // when model was added to the dataset
    private Set<String> tags;                          // DUPLICATE or WARNING     TODO: manually label other tags
    private Set<String> duplicates;

    // -- FORMAT-SPECIFIC PROPS --
    private String language;        // .xml

    // -- NESTED OBJECTS --
    private List<ArchimateElement> elements;
    private List<ArchimateRelationship> relationships;
    private List<ArchimateView> views;
}

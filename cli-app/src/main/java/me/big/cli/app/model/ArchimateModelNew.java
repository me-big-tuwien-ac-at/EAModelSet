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

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document
public class ArchimateModelNew {
    // -- BASIC PROPS --
    @Id
    private String identifier;                          // me.big.tuwien.ac.at/EAModelSet/<archimateId>
    private String archimateId;                         // Model ID (from parsed file)
    private String name;                                // Model Name (from parsed file)
    private String description;                         // Model Description (optional, from parsed file)

    // -- SUPPLEMENTARY PROPS --
    private List<String> formats;                        // [ JSON, ARCHIMATE, XML, CSV, PNG ]
    private String source;                              // GitHub / GenMyModel / Other
    private String repository;
    private String license;
    private String sourceFile;                          // path to file, where  model was parsed from (e.g., "/raw-data/model.xml")
    private String sourceFormat;                        // ARCHIMATE / XML
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'hh:mm:ss")
    private Date timestamp;                             // when the model was added to the dataset
    private List<String> tags;                           // DUPLICATE or WARNING     TODO: manually label other tags
    private List<String> duplicates;

    // -- FORMAT-SPECIFIC PROPS --
    private String language;                            // language (detected by lingua)

    // -- NESTED OBJECTS --
    private List<ArchimateElement> elements;
    private List<ArchimateRelationship> relationships;
    private List<ArchimateView> views;
}

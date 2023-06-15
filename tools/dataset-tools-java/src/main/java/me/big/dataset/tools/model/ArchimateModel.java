package me.big.dataset.tools.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ArchimateModel {
    // BASIC PROPS
    private String id; // unique identifier
    private String name;
    private String documentation; // optional (purpose/description of model)

    // SUPPLEMENTARY PROPS
    private String file; // the file where the model was parsed from
    private String format; // 'ARCHIMATE' or 'XML' (depending on parsed file extension)
    private String source; // TODO: link to URL where model was downloaded from
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy hh:mm:ss")
    private Date timestamp; // created when model is added to the dataset (i.e. processed as JSON)
    private List<String> tags; // (DUPLICATE, ...) TODO: XML_WARNING, more tags

    // FORMAT-SPECIFIC (optional)
    private String archiVersion; // (.archimate) TODO: derive version for xml, see: https://github.com/archimatetool/archi/blob/87f2446a5c9d1febc4a3c7b151694597b40faef1/com.archimatetool.model/src/com/archimatetool/model/ModelVersion.java#L10
    private String language; // (.xml)

    // NESTED ELEMENTS
    private List<ArchimateElement> elements;
    private List<ArchimateRelationship> relationships;
    private List<ArchimateView> views;
}

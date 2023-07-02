package me.big.cli.app.model.dataset;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DatasetStats {
    // metadata
    private String title;
    private String version;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
    private Date lastUpdated;

    // derived stats
    private Long totalModals;
    private Long totalElements;
    private Long totalRelationships;
    private Long totalViews;

    private Double avgElements;
    private Double avgRelationships;
    private Double avgViews;

    private Stats languageStats;
}

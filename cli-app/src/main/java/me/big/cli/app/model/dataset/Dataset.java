package me.big.cli.app.model.dataset;

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
public class Dataset {

    private String title;
    private String version;
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date lastUpdated;

    private String repositoryUrl;
    private String homepageUrl;
    private Distribution distribution;

    private Long modelCount;
    private List<ModelInfo> modelInfos;
}

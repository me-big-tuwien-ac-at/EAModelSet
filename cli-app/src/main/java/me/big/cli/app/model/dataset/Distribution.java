package me.big.cli.app.model.dataset;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Distribution {
    private String title;
    private String downloadUrl;
    private String mediaType;
    private Long byteSize;
}

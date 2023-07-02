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
public class Stats {
    private String title;
    private List<String> labels;
    private List<Long> data;
}

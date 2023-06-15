package me.big.dataset.tools.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ArchimateView {
    private String id;
    private String name;
    private String viewpoint;
    private String documentation; // optional
}

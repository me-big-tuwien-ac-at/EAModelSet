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
public class ArchimateView {
    private String id;
    private String name;
    private String viewpoint; // optional
    @JsonIgnore private String documentation; // optional
}

package me.big.cli.app.commands;

import me.big.cli.app.neo4j.Neo4jLoader;
import me.big.cli.app.service.ModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.shell.Availability;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;
import org.springframework.shell.standard.ShellMethodAvailability;

import java.io.IOException;

@ShellComponent("Neo4j Analysis")
public class Neo4jAnalysis {

    private final DatasetManagement datasetManagement;
    private final ModelService modelService;

    @Autowired
    public Neo4jAnalysis(DatasetManagement datasetManagement, ModelService modelService) {
        this.datasetManagement = datasetManagement;
        this.modelService = modelService;
    }

    @ShellMethod(value = "Connect and load the dataset into neo4j", key = "connect")
    @ShellMethodAvailability("availabilityCheck")
    public void connect() throws IOException {
        Neo4jLoader loader = new Neo4jLoader();
        // loader.removeData();
        loader.loadData(modelService.findAll());
    }

    public Availability availabilityCheck() {
        return datasetManagement.availabilityCheck();
    }
}

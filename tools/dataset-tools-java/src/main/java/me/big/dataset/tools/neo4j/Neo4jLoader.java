package me.big.dataset.tools.neo4j;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import me.big.dataset.tools.model.ArchimateModel;
import org.neo4j.driver.AuthTokens;
import org.neo4j.driver.Driver;
import org.neo4j.driver.GraphDatabase;
import java.io.File;
import java.io.IOException;
import java.util.List;

@Slf4j
public class Neo4jLoader {

    private Driver driver;
    private QueryExecutor queryExecutor;
    private static final String NEO4J_URL = "bolt://localhost:7687";

    public Neo4jLoader() {
        setup();
    }

    public void removeData() {
        log.info("Removing data from graph database...");
        queryExecutor.deleteAll();
        log.info("All data removed!");
    }

    public void loadData(List<File> jsonFiles) {
        ObjectMapper mapper = new ObjectMapper();
        for (File file : jsonFiles) {
            log.info("Loading file '{}' ...", file.getPath());

            try {
                ArchimateModel model = mapper.readValue(file, ArchimateModel.class);

                // (:MODEL)
                queryExecutor.store(model);

                // (:MODEL)-[:HAS_ELEMENT]->(:ELEMENT)
                model.getElements().forEach(e -> queryExecutor.store(e, model.getId()));

                // (ELEMENT)-[:RELATION]->(:ELEMENT)
                model.getRelationships().forEach(r -> queryExecutor.store(r, model.getId()));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    private void setup() {
        driver = GraphDatabase.driver(NEO4J_URL, AuthTokens.none());
        driver.verifyConnectivity();
        Runtime.getRuntime().addShutdownHook(new Thread(driver::close));
        queryExecutor = new QueryExecutor(driver);
    }
}

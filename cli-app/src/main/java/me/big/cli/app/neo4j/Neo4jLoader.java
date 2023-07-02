package me.big.cli.app.neo4j;

import lombok.extern.slf4j.Slf4j;
import me.big.cli.app.model.ArchimateModel;
import org.neo4j.driver.AuthTokens;
import org.neo4j.driver.Driver;
import org.neo4j.driver.GraphDatabase;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

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

    public void loadData(List<ArchimateModel> models) {
        AtomicInteger count = new AtomicInteger(0);
        // queryExecutor.createIndex();

        log.info("Loading {} models into neo4j... (this might take a while)", models.size());
        for (ArchimateModel model : models) {
            if (count.incrementAndGet() % 10 == 0) {
                log.info("Loaded {} models", count.get());
            }
            // (:MODEL)
            queryExecutor.store(model);

            // (:MODEL)-[:HAS_ELEMENT]->(:ELEMENT)
            model.getElements().forEach(e -> queryExecutor.store(e, model.getArchimateId()));

            // (ELEMENT)-[:RELATION]->(:ELEMENT)
            model.getRelationships().forEach(r -> queryExecutor.store(r, model.getArchimateId()));
        }
    }

    private void setup() {
        driver = GraphDatabase.driver(NEO4J_URL, AuthTokens.none());
        driver.verifyConnectivity();
        Runtime.getRuntime().addShutdownHook(new Thread(driver::close));
        queryExecutor = new QueryExecutor(driver);
    }
}

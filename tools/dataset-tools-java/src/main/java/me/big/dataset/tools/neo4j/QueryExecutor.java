package me.big.dataset.tools.neo4j;

import me.big.dataset.tools.model.ArchimateModel;
import me.big.dataset.tools.model.ArchimateElement;
import me.big.dataset.tools.model.ArchimateRelationship;
import org.neo4j.driver.*;
import java.util.List;
import java.util.Map;

import static org.neo4j.driver.Values.parameters;

public class QueryExecutor {

    private final Driver driver;

    public QueryExecutor(Driver driver) {
        this.driver = driver;
    }

    public void deleteAll() {
        try (var session = driver.session(getSessionConfig(AccessMode.WRITE))) {
            // see: https://neo4j.com/developer/kb/large-delete-transaction-best-practices-in-neo4j/
            session.run("MATCH (n)-[r]-() CALL { WITH r DELETE r } IN TRANSACTIONS OF 10000 ROWS WITH distinct n CALL { WITH n DELETE n } IN TRANSACTIONS OF 10000 ROWS;");
            // make sure that empty models also get deleted (i.e. models with no connected (:Element))
            session.run("MATCH (n) DELETE n");
        }
    }

    public void store(ArchimateModel m) {
        try (var session = driver.session(getSessionConfig(AccessMode.WRITE))) {
            session.executeWrite(tx -> addModel(tx, m).consume());
        }
    }

    public void store(ArchimateElement e, String modelId) {
        try (var session = driver.session(getSessionConfig(AccessMode.WRITE))) {
            session.executeWrite(tx -> addElement(tx, e, modelId).consume());
        }
    }

    public void store(ArchimateRelationship r, String modelId) {
        try (var session = driver.session(getSessionConfig(AccessMode.WRITE))) {
            session.executeWrite(tx -> addRelation(tx, r, modelId).consume());
        }
    }

    private Result addModel(TransactionContext tx, ArchimateModel m) {
        var params = parameters("archimateId", m.getId(),
                "name", m.getName(),
                "doc", m.getDocumentation(),
                //"file", model.getFile(),
                //"source", model.getSource(),
                "format", m.getFormat()
                //"timestamp", model.getTimestamp(),
                //"tags", model.getTags(),
                //"archiVersion", model.getArchiVersion(),
                //"language", model.getLanguage(),
        );
        return tx.run("CREATE (:Model {archimateId: $archimateId, name: $name, documentation: $doc, " +
                "format: $format})", params);
    }

    private Result addElement(TransactionContext tx, ArchimateElement e, String modelId) {
        var params = parameters("modelId", modelId,
                "elementId", e.getId(),
                "name", e.getName(),
                "type", e.getType(),
                "layer", e.getLayer(),
                "documentation", e.getDocumentation());
        return tx.run("MATCH (m:Model {archimateId: $modelId}) "
                + "CREATE (m)-[:HAS_ELEMENT]->(:Element {archimateId: $elementId, name: $name, type: $type, layer: $layer, documentation: $documentation})", params);
    }

    private Result addRelation(TransactionContext tx, ArchimateRelationship r, String modelId) {
        var params = parameters(
                "modelId", modelId,
                "sourceId", r.getSourceId(),
                "targetId", r.getTargetId(),
                "type", r.getType(),
                "name", r.getName(),
                "documentation", r.getDocumentation()
        );

        return tx.run("MATCH (m:Model {archimateId: $modelId})-[:HAS_ELEMENT]->(s:Element {archimateId: $sourceId}) " +
                "MATCH (m:Model {archimateId: $modelId})-[:HAS_ELEMENT]->(t:Element {archimateId: $targetId}) " +
                "CREATE (s)-[r:RELATION {type: $type, sourceId: $sourceId, targetId: $targetId, name: $name, documentation: $documentation}]->(t)", params);
    }

    private static SessionConfig getSessionConfig(AccessMode mode) {
        return SessionConfig.builder().withDefaultAccessMode(mode).build();
    }

    private List<Map<String, Object>> query(String query, Map<String, Object> params) {
        try (Session session = getSession(driver)) {
            return session.readTransaction(tx -> tx.run(query, params).list(r -> r.asMap(QueryExecutor::convert)));
        }
    }

    public static Session getSession(Driver driver) {
        return driver.session(SessionConfig.forDatabase("neo4j"));
    }

    private static Object convert(Value value) {
        return switch (value.type().name()) {
            case "PATH" -> value.asList(QueryExecutor::convert);
            case "NODE", "RELATIONSHIP" -> value.asMap();
            default -> value.asObject();
        };
    }
}

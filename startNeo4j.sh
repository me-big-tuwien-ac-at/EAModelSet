cd neo4j && docker run \
    --publish=7474:7474 \
    --publish=7687:7687 \
    --volume=$(pwd)/conf:/conf \
    --volume=$(pwd)/data:/data \
    --volume=$(pwd)/logs:/logs \
    --env NEO4J_AUTH=none \
    --env NEO4J_PLUGINS='["apoc", "graph-data-science"]' \
    --name neo4j neo4j:5.4
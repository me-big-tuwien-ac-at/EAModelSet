package me.big.cli.app.repository;

import me.big.cli.app.model.ArchimateModelNew;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ModelRepository extends MongoRepository<ArchimateModelNew, String> {

}

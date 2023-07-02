package me.big.cli.app.repository;

import me.big.cli.app.model.ArchimateModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ModelRepository extends MongoRepository<ArchimateModel, String> {

}

package io.breitek.PPMTool.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import io.breitek.PPMTool.domain.Project;

@Repository
public interface ProjectRepository extends CrudRepository<Project, Long> {
	Project findByProjectIdentifier(String projectId);

	@Override
	Iterable<Project> findAll();
}

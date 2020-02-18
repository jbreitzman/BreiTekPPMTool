package io.breitek.PPMTool.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import io.breitek.PPMTool.domain.Project;
import io.breitek.PPMTool.repositories.ProjectRepository;

@Service
public class ProjectService {

	@Autowired
	private ProjectRepository projectRepository;
	
	public Project saveOrUpdateProject(Project project) {
		
		// Logic
		
		return projectRepository.save(project);
	}
}

package com.douglas.portfolio.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douglas.portfolio.models.ProjectModel;
import com.douglas.portfolio.repositories.ProjectRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/projects")
public class ProjectController {

	@Autowired
	private ProjectRepository repository;
	
	@GetMapping
	public ResponseEntity<List<ProjectModel>> findall(){
		return ResponseEntity.ok(repository.findAll());
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<ProjectModel> findById(@PathVariable Long id) {
		ProjectModel project = repository.findById(id).get();
		return ResponseEntity.ok().body(project);
	}
	
	@PostMapping
	public ResponseEntity<ProjectModel> save(@RequestBody ProjectModel project) {
		return ResponseEntity.ok(repository.save(project));
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<ProjectModel> update(@PathVariable Long id, @RequestBody ProjectModel projectDT){
		ProjectModel project = repository.findById(id).get();
		
		project.setCode(projectDT.getCode());
		project.setDemo(projectDT.getDemo());
		project.setDeploy(projectDT.getDeploy());
		project.setDescription(projectDT.getDescription());
		project.setGif(projectDT.getGif());
		project.setImage(projectDT.getImage());
		project.setName(projectDT.getName());
		project.setTools(projectDT.getTools());
		project.setType(projectDT.getType());
		
		final ProjectModel update = repository.save(project);
		
		return ResponseEntity.ok(update);
	}
	
	@DeleteMapping(value = "/{id}")
	public Map<String, Boolean> delete(@PathVariable Long id){
		ProjectModel project = repository.findById(id).get();
		
		repository.delete(project);
		
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	
	
	
	
	

}

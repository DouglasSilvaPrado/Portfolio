package com.douglas.portfolio.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.douglas.portfolio.models.ProjectModel;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectModel, Long> {

}

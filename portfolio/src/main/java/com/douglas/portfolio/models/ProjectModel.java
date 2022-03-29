package com.douglas.portfolio.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name = "tb_project")
public class ProjectModel implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String image;
	
	private String gif;
	
	private String name;
	
	private String description;
	
	private String type;
	
	private String code;
	
	private String deploy;
	
	private String tools;
	
	private String demo;

}

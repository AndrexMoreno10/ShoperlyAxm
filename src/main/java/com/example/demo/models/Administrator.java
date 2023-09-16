package com.example.demo.models;

import jakarta.persistence.Entity;

@Entity
public class Administrator extends User {
	

	private String role;
    private String specialization;
    private String studies;
    private String professional_card;
    
    public Administrator() {
		super();
	}
    

	public Administrator(String role, String specialization, String studies, String professional_card) {
		super();
		this.role = role;
		this.specialization = specialization;
		this.studies = studies;
		this.professional_card = professional_card;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public String getStudies() {
		return studies;
	}

	public void setStudies(String studies) {
		this.studies = studies;
	}

	public String getProfessional_card() {
		return professional_card;
	}

	public void setProfessional_card(String professional_card) {
		this.professional_card = professional_card;
	}
    
    

}
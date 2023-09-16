package com.example.demo.models;

import java.util.Date;

import jakarta.persistence.Entity;

@Entity
public class Buys {

	private String description;
	private double total_buy;
	private Date date;
	
	public Buys(String description, double total_buy, Date date) {
		super();
		this.description = description;
		this.total_buy = total_buy;
		this.date = date;
	}
	
	public Buys() {
		super();
	}


	public String getDescription() {
		return description;
	}



	public void setDescription(String description) {
		this.description = description;
	}



	public double getTotal_buy() {
		return total_buy;
	}



	public void setTotal_buy(double total_buy) {
		this.total_buy = total_buy;
	}



	public Date getDate() {
		return date;
	}



	public void setDate(Date date) {
		this.date = date;
	}

}
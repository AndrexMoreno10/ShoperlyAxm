package com.example.demo.models;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;



@Entity(name = "categories")
public class Category {

	private String name;
	private List<Product>products;
	
	 public Category(String name, List<Product> products) {
		super();
		this.name = name;
		this.products = products;
	}

	public Category() {
		super();
	}
	
	@OneToMany
	@JoinColumn(name = "cat_product")
	Product product;
	
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}
	
	
	
	
	
}

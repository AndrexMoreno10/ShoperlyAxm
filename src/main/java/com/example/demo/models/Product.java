package com.example.demo.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "products")
public class Product {

    public static final String AVAILABLE = "available";
    public static final String NOT_AVAILABLE = "not_available";

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String name;
	private String description;
	private double price;
	private Supplier supplier;
	private Category category;
	private String state;
	private String url;

	
	public Product(String name, String description, double price, Supplier supplier, Category category, String state,
			String url) {
		super();
		this.name = name;
		this.description = description;
		this.price = price;
		this.supplier = supplier;
		this.category = category;
		this.state = state;
		this.url = url;
	}


	public Product() {
	    super();
	}
	
	


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}


	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}


	public Supplier getSupplier() {
		return supplier;
	}


	public void setSupplier(Supplier supplier) {
		this.supplier = supplier;
	}


	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
		this.category = category;
	}


	public String getState() {
		return state;
	}


	public void setState(String state) {
		this.state = state;
	}


	public static String getAvailable() {
		return AVAILABLE;
	}


	public static String getNotAvailable() {
		return NOT_AVAILABLE;
	}


	public String getUrl() {
		return url;
	}


	public void setUrl(String url) {
		this.url = url;
	}
	
	


}	
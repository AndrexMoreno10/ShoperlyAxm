package com.example.demo.models;

import java.util.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Sale {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long code;
    private User user;
    private Date date_sale;
    private List<Product> products;
    private double total_value;
    
    
    public Sale(Long code, User user, Date date_sale, List<Product> products, double total_value) {
		super();
		this.code = code;
		this.user = user;
		this.date_sale = date_sale;
		this.products = products;
		this.total_value = total_value;
	}

	public Sale() {
		super();
	}

	public Long getCode() {
		return code;
	}

	public void setCode(Long code) {
		this.code = code;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Date getDate_sale() {
		return date_sale;
	}

	public void setDate_sale(Date date_sale) {
		this.date_sale = date_sale;
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public double getTotal_value() {
		return total_value;
	}

	public void setTotal_value(double total_value) {
		this.total_value = total_value;
	}
	

}

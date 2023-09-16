package com.example.demo.models;

import java.util.List;

import jakarta.persistence.Entity;

@Entity
public class Shopping_Cart {

    private List<Product> products;
    private User user;
    
    
    public Shopping_Cart(List<Product> products, User user) {
		super();
		this.products = products;
		this.user = user;
	}

	public Shopping_Cart() {
		super();
	}

	public List<Product> getProducts() {
		return products;
	}

	public void setProducts(List<Product> products) {
		this.products = products;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

    
    

}

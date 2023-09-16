package com.example.demo.models;

import jakarta.persistence.Entity;

@Entity
class Supplier {

	private String name; 
	private String phone;
	private String address;
	
    public Supplier() {
		super();
	}

	public Supplier(String name, String phone,String address) {
		super();
		this.name = name;
		this.phone = phone;
		this.address = address;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
    
	
    
}

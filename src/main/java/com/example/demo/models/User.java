package com.example.demo.models;

import jakarta.persistence.Entity;

@Entity
public class User {
	
	private String name;
	private String document;
	private int age; 
	private String email;
	private String phone;
	private String address;
	private String password;
	private String username;
	
	public User() {
		super();
	}

	public User(String name, String document, int age, String email, String phone, String address, String password,String username) {
		super();
		this.name = name;
		this.document = document;
		this.age = age;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.password = password;
		this.username = username;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDocument() {
		return document;
	}

	public void setDocument(String document) {
		this.document = document;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}


}

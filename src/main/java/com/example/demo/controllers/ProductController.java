package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Product;
import com.example.demo.models.Supplier;
import com.example.demo.services.ProductService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:4200")
public class ProductController {
	
	@Autowired
	private ProductService productService;
	
	@GetMapping
	public ResponseEntity<List<Product>> getAll() {
        return ResponseEntity.ok(productService.getAll());
    }
	
    @GetMapping("/{id}")
    public ResponseEntity<Product> getId(@PathVariable Long id) {
        Product product = productService.getId(id);
        
        if (product != null) {
            return ResponseEntity.ok(product);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping
    public ResponseEntity<Product> create(@RequestBody Product product) {
        return ResponseEntity.ok(productService.save(product));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        productService.delete(id);
        return ResponseEntity.noContent().build();
    }
    
    
    @GetMapping("/category/{id}")
    public ResponseEntity<List<Product>> findByCategory(@PathVariable Long id){
    	return ResponseEntity.ok(productService.findByCategory(id));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Product> putProduct(@PathVariable Long id, @RequestBody Product newProduct) {
    	Product aux = productService.getId(id);

        if (aux != null) {
        	aux.setName(newProduct.getName());
        	aux.setDescription(newProduct.getDescription());
        	aux.setPrice(newProduct.getPrice());
        	aux.setSupplier(newProduct.getSupplier());
            aux.setCategory(newProduct.getCategory());
            aux.setState(newProduct.getState());
            aux.setUrl(newProduct.getUrl());
            
            return ResponseEntity.ok(productService.save(aux));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}

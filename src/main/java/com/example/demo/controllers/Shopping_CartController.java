package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Shopping_Cart;
import com.example.demo.services.ShoppingCartService;

@RestController
@RequestMapping("/api/shopping_Cart")
@CrossOrigin(origins = "http://localhost:4200")
public class Shopping_CartController {

	@Autowired
	private ShoppingCartService shoppingCartService;
	
	@GetMapping
	public ResponseEntity<List<Shopping_Cart>> getAll() {
        return ResponseEntity.ok(shoppingCartService.getAll());
    }
	
    @GetMapping("/{id}")
    public ResponseEntity<Shopping_Cart> getId(@PathVariable Long id) {
        Shopping_Cart shoppingCart = shoppingCartService.getId(id);
        
        if (shoppingCart != null) {
            return ResponseEntity.ok(shoppingCart);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping
    public ResponseEntity<Shopping_Cart> create(@RequestBody Shopping_Cart shopping_Cart) {
        return ResponseEntity.ok(shoppingCartService.save(shopping_Cart));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
    	shoppingCartService.delete(id);
        return ResponseEntity.noContent().build();
    }
	
}

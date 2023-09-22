package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.User;
import com.example.demo.models.Shopping_Cart;
import com.example.demo.repository.IShoppingCartRepository;

@Service
public class ShoppingCartService {

	@Autowired
	private IShoppingCartRepository shoppingCartRepository;
	
	public List<Shopping_Cart> getAll(){
		return shoppingCartRepository.findAll();
	}
	
	public Shopping_Cart getId(Long id) {
		return shoppingCartRepository.findById(id).orElse(null);
	}
	
   public Shopping_Cart save(Shopping_Cart shoppingCart) {
	   return shoppingCartRepository.save(shoppingCart);   
   }
   
   public void delete(Long id) {
	   shoppingCartRepository.deleteById(id);
  }
   
   public List<Shopping_Cart> findByUser(Long id) {
	   User user = new User();
	   user.setId(id);
	   return shoppingCartRepository.findByUser(user);
		
	}
	
}

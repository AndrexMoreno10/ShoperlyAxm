import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

  cartItems: any[];

  

  constructor(private cartService: ShoppingCartService) {
    this.cartItems = this.cartService.getCartItems();
    

  }

  clearCart() {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  removeFromCart(itemId: number) {
    
    this.cartService.removeFromCart(itemId);
    this.cartItems = this.cartService.getCartItems();
  }

  incrementQuantity(item: any): any {
    const stockQuantity = item.quantity; // Supongamos que el producto tiene un atributo 'stockQuantity' que representa la cantidad en stock.
  
    if (item.quantityclient < stockQuantity) {
      item.quantityclient++; // Incrementa la cantidad en el carrito.
      return item.quantityclient;
    } else {
      // Muestra un mensaje de error al usuario si no hay suficiente stock.
      alert('No hay suficiente stock disponible para este producto.');
    }
  }
  
  decrementQuantity(item: any): any {
    if (item.quantityclient > 1) {
      item.quantityclient--; // Decrementa la cantidad en el carrito.
      return item.quantityclient;
    } else {
      // La cantidad es igual a 1, solicita confirmación para eliminar el producto.
      const confirmDelete = window.confirm('¿Desea eliminar el producto del carrito?');
  
      if (confirmDelete) {
        this.removeFromCart(item.id); // Llama al método para eliminar el producto del carrito.
      }
  
      return item.quantityclient;
    }

}
}

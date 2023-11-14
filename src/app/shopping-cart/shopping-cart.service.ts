import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartItems: any[] = [];

  constructor() { }

  addToCart(product: any) {

    const stockQuantity = product.quantity;

    if (stockQuantity >= 1) { // Verifica si la cantidad es válida (mayor o igual a 1).
      
      const newProduct = {
        ...product,
        quantityclient: 1
      };
      this.cartItems.push(newProduct);
    } else {
      // Muestra un mensaje de error al usuario si no hay suficiente stock.
      alert('No hay suficiente stock disponible para este producto.');
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  clearCart() {
    this.cartItems = [];
  }

   removeFromCart(productId: number) {
    const index = this.cartItems.findIndex(item => item.id === productId);

    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }



}

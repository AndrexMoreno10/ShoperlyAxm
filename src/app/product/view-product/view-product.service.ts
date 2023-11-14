import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewProductService {

  private cartItems: any[] = [];

  constructor() { }

  addToCart(product: any) {
    this.cartItems.push(product);
  }
}
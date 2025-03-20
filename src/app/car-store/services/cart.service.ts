import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../interfaces/cart.interfaces';
import { Part } from '../interfaces/parts.interfaces';
import { bodyKit } from '../interfaces/body-Kit.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartKey = 'cart';
  private cartItems: CartItem[] = [];
  private cart = new BehaviorSubject<CartItem[]>([]);

  private isCartEmptySubject = new BehaviorSubject<boolean>(true);
  isCartEmpty$ = this.isCartEmptySubject.asObservable();

  constructor() {
    this.loadCart();
  }

  getCart(): Observable<CartItem[]> {
    return this.cart.asObservable();
  }

  addToCart(item: Part | bodyKit) {
    const index = this.cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (index !== -1) {
      this.cartItems[index].quantity += 1;
    } else {
      const cartItem: CartItem = {
        ...item,
        type: (item as CartItem).type || ('price' in item ? 'Part' : 'bodyKit'),
        quantity: 1,
      };
      this.cartItems.push(cartItem);
    }
    this.saveCart();
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find((cartItem) => cartItem.id === productId);
    if (item) {
      item.quantity = quantity < 1 ? 1 : quantity;
      this.saveCart();
    }
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter((item) => item.id !== productId);
    this.saveCart();
  }

  saveCart() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cartItems));
    this.cart.next([...this.cartItems]);
    this.isCartEmptySubject.next(this.cartItems.length === 0);
  }

  private loadCart() {
    const storedCart = localStorage.getItem(this.cartKey);
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
      this.cart.next([...this.cartItems]);
      this.isCartEmptySubject.next(this.cartItems.length === 0);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart.interfaces';

@Component({
  selector: 'app-pay',
  templateUrl: 'pay.component.html',
  styleUrls: ['pay.component.scss'],
})
export class PayComponent implements OnInit {
  selectedOption: string = '';
  SavePayment: string = '';

  gstIncCost: number = 965953;
  shippingCost: number = 30000;

  cartItems: CartItem[] = [];
  selectedImage: string | null = null;

  constructor(private router: Router, private cartS: CartService) {}

  ngOnInit() {
    this.cartS.getCart().subscribe((items) => {
      this.cartItems = items;
    });
  }

  goToCart() {
    this.router.navigate(['/store/cart']);
  }

  getSubtotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  getTotal(): number {
    return this.getSubtotal() + this.gstIncCost + this.shippingCost;
  }

  openImagePopup(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeImagePopup() {
    this.selectedImage = null;
  }
}

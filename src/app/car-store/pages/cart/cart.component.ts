import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart.interfaces';
import { Router } from '@angular/router';
import { NotifierService } from '../../services/notifier.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems: CartItem[] = [];
  selectedImage: string | null = null;

  isCartEmpty = true; //

  constructor(
    private cartService: CartService,
    private router: Router,
    private toast: NotifierService
  ) {}

  ngOnInit() {
    this.cartService.getCart().subscribe((items) => {
      this.cartItems = items;
    });

    this.cartService.isCartEmpty$.subscribe((empty) => {
      this.isCartEmpty = empty;
    });
  }

  goToProductInfo(product: CartItem): void {
    const type = product.type;

    if (type === 'Part') {
      this.router.navigate(['/store/partsInfo', product.id]);
    } else if (type === 'bodyKit') {
      this.router.navigate(['/store/bodyKitsInfo', product.id]);
    }
  }

  updateQuantity(product: CartItem) {
    if (product.quantity < 1 || isNaN(product.quantity)) {
      product.quantity = 1;
    }
    this.cartService.saveCart();
  }

  removeFromCart(productId: number) {
    this.cartService.removeFromCart(productId);
    this.toast.showError(
      'Producto Eliminado',
      'El Producto fue eliminado del carrito'
    );
  }

  getTotal(): number {
    return this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  }

  openImagePopup(imageUrl: string) {
    this.selectedImage = imageUrl;
  }

  closeImagePopup() {
    this.selectedImage = null;
  }

  goToPay() {
    this.router.navigate(['/store/pay']);
  }
}

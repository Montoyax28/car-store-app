import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../interfaces/cart.interfaces';
import { NotifierService } from '../../services/notifier.service';

@Component({
  selector: 'app-pay',
  templateUrl: 'pay.component.html',
  styleUrls: ['pay.component.scss'],
})
export class PayComponent implements OnInit {
  selectedOption: string = '';
  SavePayment: string = '';

  loading = true;

  gstIncCost: number = 965953;
  shippingCost: number = 30000;

  cartItems: CartItem[] = [];
  selectedImage: string | null = null;

  constructor(private router: Router, private cartS: CartService, private toats: NotifierService) {}

  ngOnInit() {
    this.cartS.getCart().subscribe((items) => {
      this.cartItems = items;
      this.loading = false;
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

  //creacion de la promesa
    procesarPago(monto : number ):Promise<string> {
      return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(this.getTotal() > 1000000){
          this.toats.showSucess('Pago Aceptado','El pago se ha hecho correctamente')
        } else {
          this.toats.showError('Pago Fallido','El pago ha sido rechazado, intente de nuevo')
        }
      },2000)
    })
  }

  //uso de la promesa
  realizarPago(){
    this.procesarPago(this.getTotal())
    .then(msg => console.log(msg))
    .catch(err => console.log(err))
  }

}

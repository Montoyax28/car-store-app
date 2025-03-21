import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  isPopUpVisible: boolean = false;
  isPopUpTwoVisible: boolean = false;

  constructor(private router: Router) {}

  goToCart() {
    this.router.navigate(['/store/cart']);
  }

  goToLogin() {
    this.router.navigate(['/store/login']);
  }

  goToWe() {
    this.router.navigate(['/store/we']);
  }

  goToTermsAndConditions() {
    this.router.navigate(['/store/termsAndConditions']);
  }

  goToPrePurchaseInspection() {
    this.router.navigate(['/store/prePurchaseInspection']);
  }

  goToContactUs() {
    this.router.navigate(['/store/contactUs']);
  }

  goToPrivacyPolicy() {
    this.router.navigate(['/store/privacyPolicy']);
  }

  openPopUp() {
    this.isPopUpVisible = true;
  }

  closePopUp() {
    this.isPopUpVisible = false;
  }

  openPopUpTwo() {
    this.isPopUpTwoVisible = true;
  }

  closePopUpTwo() {
    this.isPopUpTwoVisible = false;
  }
}

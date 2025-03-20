import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  mostrarInput = false;

  constructor(private router: Router) {}

  goToHome() {
    this.router.navigate(['/store/home']);
  }

  goToTuningCars() {
    this.router.navigate(['/store/tuningCars']);
  }

  goToBodyKits() {
    this.router.navigate(['/store/bodyKits']);
  }

  goToParts() {
    this.router.navigate(['/store/parts']);
  }

  goToCart() {
    this.router.navigate(['/store/cart']);
  }

  goToLogin() {
    this.router.navigate(['/store/login']);
  }

  goToWe() {
    this.router.navigate(['/store/we']);
  }

  goToDragRacing() {
    this.router.navigate(['/store/dragRacing']);
  }

  toggleInput() {
    this.mostrarInput = !this.mostrarInput;
  }
}

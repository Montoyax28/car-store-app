import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  mostrarInput = false;
  userEmail: string | null = '';
  isAuthenticated: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.userEmail = this.authService.getUserEmail();
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  ngDoCheck(): void {
    this.userEmail = this.authService.getUserEmail();
    this.isAuthenticated = this.authService.isAuthenticated();
  }

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

  goToSettings() {
    this.router.navigate(['/store/settings']);
  }

  toggleInput() {
    this.mostrarInput = !this.mostrarInput;
  }
}

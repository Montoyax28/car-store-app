import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(email: string, password: string): void {
    localStorage.setItem('token', email);
    this.router.navigate(['/store/cart']);
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/store/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

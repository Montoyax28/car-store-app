import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    if (email && password) {
      localStorage.setItem('token', email);
      localStorage.setItem('userEmail', email);
      this.router.navigate(['/store/cart']);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/store/login']);
  }

  getUserEmail(): string | null {
    return localStorage.getItem('userEmail');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}

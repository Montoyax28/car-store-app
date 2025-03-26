import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  loading = true;

  constructor(private router: Router, private authS: AuthService) {}

  ngOnInit() {
    this.loading = false;
  }

  login() {
    if (this.email && this.password) {
      this.authS.login(this.email, this.password);
    } else {
      alert('Por favor, ingrese correo y contraseña');
      this.router.navigate(['/store/login']);
    }
  }

  goToCreateAccount() {
    this.router.navigate(['/store/createAccount']);
  }

  goToTermsAndConditions() {
    this.router.navigate(['/store/termsAndConditions']);
  }
}

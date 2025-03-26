import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { NotifierService } from '../../services/notifier.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  loading = true;

  constructor(
    private router: Router,
    private authS: AuthService,
    private toast: NotifierService
  ) {}

  ngOnInit() {
    this.loading = false;
  }

  login() {
    if (!this.email || !this.password) {
      this.toast.showWarning(
        'Fill in all fields',
        'Please enter your email and password.'
      );
      return;
    }

    const success = this.authS.login(this.email, this.password);
    if (!success) {
      this.toast.showError('Error', 'Login failed. Please try again.');
    }
  }

  goToCreateAccount() {
    this.router.navigate(['/store/createAccount']);
  }

  goToTermsAndConditions() {
    this.router.navigate(['/store/termsAndConditions']);
  }
}

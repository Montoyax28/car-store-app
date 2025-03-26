import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: 'create-account.component.html',
  styleUrls: ['create-account.component.scss'],
})
export class CreateAccountComponent implements OnInit {
  loading = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.loading = false;
  }

  goToLogin() {
    this.router.navigate(['/store/login']);
  }

  goToTermsAndConditions() {
    this.router.navigate(['/store/termsAndConditions']);
  }
}

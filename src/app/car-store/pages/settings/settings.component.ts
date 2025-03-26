import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  activeSection: string = 'seguridad';
  loading = true;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loading = false;
  }

  showSection(section: string): void {
    this.activeSection = section;
  }

  logout() {
    this.authService.logout();
  }
}

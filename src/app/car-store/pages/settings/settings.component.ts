import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

interface SettingOption {
  key: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  activeSection: string = 'security';
  loading = true;

  settingsOptions: SettingOption[] = [
    { key: 'security', label: 'Security', icon: '🔒' },
    { key: 'notifications', label: 'Notifications', icon: '🔔' },
    { key: 'payments', label: 'Payment Methods', icon: '💳' },
    { key: 'privacy', label: 'Privacy', icon: '🔏' },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  showSection(section: string): void {
    this.activeSection = section;
  }

  logout(): void {
    const confirmLogout = confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      this.authService.logout();
    }
  }
}

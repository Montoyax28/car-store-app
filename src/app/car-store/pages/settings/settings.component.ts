import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  activeSection: string = 'seguridad';

  loading = true;

  ngOnInit(): void {
    this.loading = false;
  }

  showSection(section: string): void {
    this.activeSection = section;
  }
}

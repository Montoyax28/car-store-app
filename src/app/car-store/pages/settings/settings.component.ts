import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-component',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  activeSection: string = 'seguridad';

  showSection(section: string): void {
    this.activeSection = section;
  }
}

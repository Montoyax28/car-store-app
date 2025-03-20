import { Component, Input } from '@angular/core';
import { bodyKit } from '../../interfaces/body-Kit.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bodykit-card',
  templateUrl: './card-body-kit.component.html',
  styleUrls: ['card-body-kit.component.scss'],
})
export class CardBodyKitComponent {
  @Input() bodyKit!: bodyKit;

  constructor(private router: Router) {}

  goToBodyKitsInfo(cardId: number): void {
    this.router.navigate(['/store/bodyKitsInfo', cardId]);
  }
}

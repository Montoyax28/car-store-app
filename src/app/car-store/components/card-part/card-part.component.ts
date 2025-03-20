import { Component, Input } from '@angular/core';
import { Part } from '../../interfaces/parts.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-part-card',
  templateUrl: './card-part.component.html',
  styleUrls: ['./card-part.component.scss'],
})
export class CardPartComponent {
  @Input() part!: Part;

  constructor(private router: Router) {}

  goToPartsInfo(cardId: number): void {
    this.router.navigate(['/store/partsInfo', cardId]);
  }
}

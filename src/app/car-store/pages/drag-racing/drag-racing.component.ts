import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drag-racing',
  templateUrl: 'drag-racing.component.html',
  styleUrls: ['drag-racing.component.scss'],
})
export class DragRacingComponent {
  constructor(private routes: Router) {}

  goToDragRacingInfo(category: string) {
    this.routes.navigate(['/store/dragRacingInfo'], {
      queryParams: { category },
    });
  }
}

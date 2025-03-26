import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drag-racing',
  templateUrl: 'drag-racing.component.html',
  styleUrls: ['drag-racing.component.scss'],
})
export class DragRacingComponent implements OnInit {
  loading = true;

  constructor(private routes: Router) {}

  ngOnInit(): void {
    this.loading = false;
  }

  goToDragRacingInfo(category: string) {
    this.routes.navigate(['/store/dragRacingInfo'], {
      queryParams: { category },
    });
  }
}

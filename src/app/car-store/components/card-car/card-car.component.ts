import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../interfaces/car.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-car',
  templateUrl: './card-car.component.html',
  styleUrls: ['./card-car.component.scss'],
})
export class CardCarComponent implements OnInit {
  @Input() car!: Car;

  constructor(private router: Router) {}

  goToCarInfo(carId: number): void {
    this.router.navigate(['/store/carInfo', carId]);
  }
  ngOnInit(): void {}
}

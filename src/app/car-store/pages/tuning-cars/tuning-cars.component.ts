import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../interfaces/car.interfaces';

@Component({
  selector: 'app-tuning-cars',
  templateUrl: './tuning-cars.component.html',
  styleUrls: ['./tuning-cars.component.scss'],
})
export class TuningCarsComponent implements OnInit {
  loading = true;

  constructor(private service: CarService) {}

  cars: Car[] = [];

  ngOnInit(): void {
    this.loading = true;
    this.service.getCars().subscribe((data) => {
      this.cars = data;
      this.loading = false;
    });
  }
}

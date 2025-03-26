import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../../services/car.service';
import { Car } from '../../interfaces/car.interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-carInfo',
  templateUrl: './car-info.component.html',
  styleUrls: ['./car-info.component.scss'],
})
export class CarInfoComponent implements OnInit, OnDestroy {
  car?: Car;

  loading = true;

  private sub0: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private service: CarService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      if (id) {
        const carId = Number(id);

        this.service.getCarById(carId).subscribe({
          next: (car) => {
            if (car) {
              this.car = car;
              this.loading = false;
            } else {
              console.error('Carro no encontrado.');
              this.loading = false;
            }
          },
          error: (err) => {
            console.error('Error al obtener el carro:', err);
            this.loading = false;
          },
        });
      }
    }
  }

  ngOnDestroy(): void {
    this.sub0.unsubscribe();
  }
}

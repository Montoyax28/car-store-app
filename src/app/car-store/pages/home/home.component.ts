import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Car } from '../../interfaces/car.interfaces';
import { BodyKitService } from '../../services/body-kit.service';
import { PartsService } from '../../services/parts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  loading = true;

  productos: any[] = [];
  indexActual = 0;

  constructor(
    private service: CarService,
    private bodiKitS: BodyKitService,
    private partsS: PartsService
  ) {}

  cars: Car[] = [];

  ngOnInit(): void {
    this.loading = true;
    this.service.getCars().subscribe((data) => {
      this.cars = data;
      this.obtenerProductos();
      this.loading = false;
    });
  }

  obtenerProductos() {
    this.bodiKitS.getBodyKits().subscribe((products1) => {
      this.partsS.getParts().subscribe((products2) => {
        this.productos = [...products1, ...products2].sort(
          () => Math.random() - 0.5
        );
        this.iniciarCarrusel();
      });
    });
  }

  iniciarCarrusel() {
    setInterval(() => {
      this.indexActual = (this.indexActual + 1) % this.productos.length;
    }, 3000);
  }
}

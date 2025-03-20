import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Car } from '../interfaces/car.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private readonly baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}`);
  }

  getCarById(id: number): Observable<Car | undefined> {
    return this.getCars().pipe(
      map((cars) => cars.find((car) => car.id === id))
    );
  }
}

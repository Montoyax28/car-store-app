import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { enviromentParts } from 'src/environments/environment';
import { Part } from '../interfaces/parts.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PartsService {
  private readonly baseUrl = enviromentParts.baseUrl;

  constructor(private http: HttpClient) {}

  getParts(): Observable<Part[]> {
    return this.http.get<Part[]>(`${this.baseUrl}`);
  }

  getPartById(id: number): Observable<Part | undefined> {
    return this.getParts().pipe(
      map((parts) => parts.find((part) => part.id === id))
    );
  }
}

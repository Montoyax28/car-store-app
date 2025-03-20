import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviromentBodyKits } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { bodyKit } from '../interfaces/body-Kit.interfaces';

@Injectable({
  providedIn: 'root',
})
export class BodyKitService {
  private readonly baseUrl = enviromentBodyKits.baseUrl;

  constructor(private http: HttpClient) {}

  getBodyKits(): Observable<bodyKit[]> {
    return this.http.get<bodyKit[]>(`${this.baseUrl}`);
  }

  getBodyKitById(id: number): Observable<bodyKit | undefined> {
    return this.getBodyKits().pipe(
      map((bodyKits) => bodyKits.find((bodyKit) => bodyKit.id === id))
    );
  }
}

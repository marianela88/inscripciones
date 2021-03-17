import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escuela } from '../modelos/escuela';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  
  private baseUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) { }

  getEscuelas(): Observable<EscuelasProv> {
    console.log(EscuelasProv);
    return this.http.get<EscuelasProv>(`${this.baseUrl}/escuela/`);
  }

}

export class EscuelasProv{
  escuela: Escuela = new Escuela;
}

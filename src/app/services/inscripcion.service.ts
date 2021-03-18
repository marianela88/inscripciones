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

  getEscuelas(): Observable<Escuela[]> {
   return this.http.get<Escuela[]>(`${this.baseUrl}/escuela/`);
  }
  
  agregarInscripcion(escuela: Escuela): Observable<Escuela>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(escuela);
    console.log(body)
    return this.http.post<Escuela>( body,{'headers':headers});  
  }


}



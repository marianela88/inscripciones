import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../modelos/alumno';


@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  private baseUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) { }

  saveAlumno(payload): Observable<Alumno>{
    const headers = { 'content-type': 'application/json'};

    return this.http.post<Alumno>(`${this.baseUrl}/alumnos/`, payload, { 'headers': headers});
  }
}

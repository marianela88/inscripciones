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

  agregarAlumno(alumno: Alumno): Observable<Alumno>{
    console.log(alumno);
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(alumno);
    console.log(body)
    return this.http.post<Alumno>(`${this.baseUrl}/alumnos/`, body,{'headers':headers});  
  }
}

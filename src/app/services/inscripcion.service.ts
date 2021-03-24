import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Escuela } from '../modelos/escuela';
import { Inscripcion } from '../modelos/inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  
  private baseUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) { }

  getEscuelas(): Observable<Escuela[]> {
   return this.http.get<Escuela[]>(`${this.baseUrl}/escuela/`);
  }

  agregarInscripcion(inscripcion: Inscripcion): Observable<Inscripcion>{

    const objectInstitucion = {
      alumno_id: inscripcion.alumnoId,
      tutor_id: inscripcion.tutorId,
      institucion_id: inscripcion.institucionId,
      curso: inscripcion.curso,
      nivel_educativo: inscripcion.nivelEducativo
    };

    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(objectInstitucion);
    console.log(body);
    return this.http.post<Inscripcion>(`${this.baseUrl}/inscripciones/`, body, { 'headers': headers});
  }


}



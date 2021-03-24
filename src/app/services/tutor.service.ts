import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutor } from '../modelos/tutor';


@Injectable({
  providedIn: 'root'
})
export class TutorService {

  private baseUrl = 'http://localhost:8000/api/v1';

  constructor(private http: HttpClient) { }


  saveTutor(payload): Observable<Tutor>{
    const headers = { 'content-type': 'application/json'};
    return this.http.post<Tutor>(`${this.baseUrl}/tutor/`, payload, {'headers': headers});
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/persona';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styles: [
  ]
})
export class TutorComponent implements OnInit {

  tutor: Persona = new Persona;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  back(){
    this.router.navigateByUrl('/agregaralumno');
  }

}

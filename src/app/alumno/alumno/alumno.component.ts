import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/modelos/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: []
})
export class AlumnoComponent implements OnInit {

  alumno: Alumno = new Alumno;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  nextStep(){

    // if(this.alumno.nombre != "" && this.alumno.apellido != "" && this.alumno.dni != null && this.alumno.fecnac != null && this.alumno.telefono != null && this.alumno.email != "" && this.alumno.localidad != "" && this.alumno.departamento != "" && this.alumno.nacionalidad != "" ){

    //       this.alumno = this.alumno;}

          this.router.navigateByUrl('/agregartutor');

          
    

  }

}

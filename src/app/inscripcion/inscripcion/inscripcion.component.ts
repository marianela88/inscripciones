import { Component, OnInit } from '@angular/core';
import { Escuela } from 'src/app/modelos/escuela';
import { EscuelasProv, InscripcionService } from 'src/app/services/inscripcion.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styles: []
})

export class InscripcionComponent implements OnInit {

  escuela: EscuelasProv;

  constructor(private inscripcionservice: InscripcionService) { }

  ngOnInit(): void {

    this.inscripcionservice.getEscuelas().subscribe(data => this.escuela = data);
    console.log(this.escuela);
  }

  buscarEscuela(nombreBuscar){

    // this.escuela = this.escuela.filter(escuela=>{
    //   return escuela.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase());
    // })  
  }

}

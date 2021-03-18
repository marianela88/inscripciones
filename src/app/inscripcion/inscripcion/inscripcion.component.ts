import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Escuela } from 'src/app/modelos/escuela';
import { Inscripcion, Lineas } from 'src/app/modelos/inscripcion'
import {  InscripcionService } from 'src/app/services/inscripcion.service';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styles: []
})

export class InscripcionComponent implements OnInit {

  formInscripcion: FormGroup;
  escuelas: Escuela[];
  escuelasBuscadas: Escuela[];
  inscripcion: Inscripcion;
  submitted = false;
  escuelaSeleccionada: Escuela;

  constructor(private inscripcionservice: InscripcionService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.inscripcionservice.getEscuelas().subscribe(data => {this.escuelas = data});

    this.formInscripcion = this.fb.group({
      curso: ['', Validators.required],
      nivel_educativo: ['', Validators.required],
    })
  }

  buscarEscuela(nombreBuscar): void{
    this.escuelas = this.escuelas.filter(escuela => {
      return escuela.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase());
    });
  }

  cargarEscuelas(): void{
    this.inscripcionservice.getEscuelas().subscribe(data => {this.escuelas = data; });
  }


  agregar(escuela: Escuela): void{
    this.escuelaSeleccionada = escuela;
  }

  eliminarItem(): void {

    this.escuelaSeleccionada = null;
  }

  onSubmit() {
    this.submitted = true;
    //this.guardar();

  }

  guardar(){
    this.inscripcion.curso = this.formInscripcion.get('curso').value;
    this.inscripcion.nivel_educativo = this.formInscripcion.get('nivel_educativo').value;
    // this.inscripcionservice.agregarInscripcion(this.escuela).subscribe(inscripcionadd => console.log(inscripcionadd),
    // error => console.log(error)
    // );
  }

}

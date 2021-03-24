import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Escuela } from 'src/app/modelos/escuela';
import { Inscripcion } from 'src/app/modelos/inscripcion';
import { AlumnoService } from 'src/app/services/alumno.service';
import {  InscripcionService } from 'src/app/services/inscripcion.service';
import { TutorService } from 'src/app/services/tutor.service';
import {concatMap, tap} from 'rxjs/operators';

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

  constructor(private inscripcionService: InscripcionService,
              private alumnoService: AlumnoService,
              private tutorService: TutorService,
              private fb: FormBuilder) { }

  ngOnInit(): void {

    this.inscripcionService.getEscuelas().subscribe(data => {this.escuelas = data; });

    this.formInscripcion = this.fb.group({
      curso: ['', Validators.required],
      nivel_educativo: ['', Validators.required],
    });
  }

  buscarEscuela(nombreBuscar): void{
    this.escuelas = this.escuelas.filter(escuela => {
      return escuela.nombre.toLocaleLowerCase().includes(nombreBuscar.toLocaleLowerCase());
    });
  }

  cargarEscuelas(): void{
    this.inscripcionService.getEscuelas().subscribe(data => {this.escuelas = data; });
  }


  agregar(escuela: Escuela): void{
    this.escuelaSeleccionada = escuela;
  }

  eliminarItem(): void {

    this.escuelaSeleccionada = null;
  }

  onSubmit(): void {
    this.submitted = true;
    this.guardar();

  }

  guardar(): void {
    const alumnoPayload = localStorage.getItem('datosAlumno');
    const tutorPayload = localStorage.getItem('datosTutor');

    this.inscripcion = new Inscripcion();

  //   this.tutorService.saveTutor(tutorPayload).subscribe( objectTutor => this.inscripcion.tutorId = objectTutor.persona.id);
  //   this.alumnoService.saveAlumno(alumnoPayload).subscribe( objectAlumno => this.inscripcion.alumnoId = objectAlumno.persona.id);


    this.inscripcion.curso = this.formInscripcion.get('curso').value;
    this.inscripcion.institucionId = this.escuelaSeleccionada.id;
    this.inscripcion.nivelEducativo = this.formInscripcion.get('nivel_educativo').value;
  //   console.log(this.inscripcion)
  //   this.inscripcionservice.agregarInscripcion(this.inscripcion).subscribe(inscripcionadd => console.log(inscripcionadd),
  //    error => console.log(error)
  //  );
    this.alumnoService.saveAlumno(alumnoPayload)
          .pipe(
            tap((res) => this.inscripcion.alumnoId = res.persona.id),
            concatMap((res) => this.tutorService.saveTutor(tutorPayload)),
            tap((res) => this.inscripcion.tutorId = res.persona.id),
            concatMap(() => this.inscripcionService.agregarInscripcion(this.inscripcion)),
            tap((res) => console.log(res))
          )
          .subscribe(res => console.log(res));
  }

}



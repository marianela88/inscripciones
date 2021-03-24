import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tutor } from 'src/app/modelos/tutor';
import { TutorService } from 'src/app/services/tutor.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './tutor.component.html',
  styleUrls: []
})
export class TutorComponent implements OnInit {

  formTutor: FormGroup;
  tutor: Tutor = new Tutor();
  submitted = false;
  loading: boolean = false;
  errorMessage;

  constructor(private router: Router, private fb: FormBuilder, private tutorService: TutorService) { }

  ngOnInit(): void {
  
    this.loading = true;
    this.errorMessage = "";

    this.formTutor = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      dni: new FormControl(),
      fecnac: new FormControl(),
      email: new FormControl(),
      telefono: new FormControl(),
      localidad: new FormControl(),
      dpto: new FormControl(),
      nacionalidad: new FormControl(),
      relacion: new FormControl()
    })

  }

  onSubmit() {
    this.submitted = true;
    this.guardar();

  }

  guardar(): void{
    
      let tutor = new Tutor();
      tutor.persona.nombre = this.formTutor.get('nombre')?.value;
      tutor.persona.apellido = this.formTutor.get('apellido').value;
      tutor.persona.documento = this.formTutor.get('dni').value;
      tutor.persona.fecha_nacimiento = this.formTutor.get('fecnac').value;
      tutor.persona.email = this.formTutor.get('email').value;
      tutor.persona.telefono = this.formTutor.get('telefono').value;
      tutor.persona.departamento = this.formTutor.get('dpto').value;
      tutor.persona.localidad = this.formTutor.get('localidad').value;
      tutor.persona.nacionalidad = this.formTutor.get('nacionalidad').value;
      tutor.relacion = this.formTutor.get('relacion').value;
      localStorage.setItem('datosTutor', JSON.stringify(tutor));
      this.router.navigateByUrl('inscripcion');
      console.log(tutor);


  }

}


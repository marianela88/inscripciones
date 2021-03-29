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
  error: boolean;

  constructor(private router: Router, private fb: FormBuilder, private tutorService: TutorService) { }

  ngOnInit(): void {
  
    this.loading = true;
    this.errorMessage = "";

    this.formTutor = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      fecnac: new FormControl('', [Validators.required]),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
      telefono: new FormControl('', [Validators.required]),
      localidad: new FormControl('', [Validators.required]),
      dpto: new FormControl('', [Validators.required]),
      nacionalidad: new FormControl('', [Validators.required]),
      relacion: new FormControl('', [Validators.required]),
    })

  }


  get nombreInvalido(){
    return this.formTutor.get('nombre').invalid && this.formTutor.get('nombre').touched;
  }

  get apellidoInvalido(){
    return this.formTutor.get('apellido').invalid && this.formTutor.get('apellido').touched;
  }

  get dniInvalido(){
    return this.formTutor.get('dni').invalid && this.formTutor.get('dni').touched;
  }

  get fechaNovalida(){
    return this.formTutor.get('fecnac').invalid && this.formTutor.get('fecnac').touched;
  }

  get telInvalido(){
    return this.formTutor.get('telefono').invalid && this.formTutor.get('telefono').touched;
  }

  get emailNoValido(){
    return this.formTutor.get('email').invalid && this.formTutor.get('email').touched;
  }

  get locNoValida(){
    return this.formTutor.get('localidad').invalid && this.formTutor.get('localidad').touched;
  }

  get dptoNoValida(){
    return this.formTutor.get('dpto').invalid && this.formTutor.get('dpto').touched;
  }

  get nacNoValida(){
    return this.formTutor.get('nacionalidad').invalid && this.formTutor.get('nacionalidad').touched;
  }

  get parentescoNoValida(){
    return this.formTutor.get('relacion').invalid && this.formTutor.get('relacion').touched;
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

  volver(){
    this.router.navigateByUrl('agregaralumno');
  }

}


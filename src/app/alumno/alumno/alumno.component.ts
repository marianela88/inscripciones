import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/modelos/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: []
})
export class AlumnoComponent implements OnInit {

  formAlumno: FormGroup;
  alumno: Alumno = new Alumno();
  submitted = false;
  loading = false;
  errorMessage;
  error: boolean;

  constructor(private router: Router, private fb: FormBuilder, private aluservice: AlumnoService) { }

  ngOnInit(): void {

    this.loading = true;
    this.errorMessage = '';

    this.formAlumno = new FormGroup({
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
    })

  }

  get nombreInvalido(){
    return this.formAlumno.get('nombre').invalid && this.formAlumno.get('nombre').touched;
  }

  get apellidoInvalido(){
    return this.formAlumno.get('apellido').invalid && this.formAlumno.get('apellido').touched;
  }

  get dniInvalido(){
    return this.formAlumno.get('dni').invalid && this.formAlumno.get('dni').touched;
  }

  get fechaNovalida(){
    return this.formAlumno.get('fecnac').invalid && this.formAlumno.get('fecnac').touched;
  }

  get telInvalido(){
    return this.formAlumno.get('telefono').invalid && this.formAlumno.get('telefono').touched;
  }

  get emailNoValido(){
    return this.formAlumno.get('email').invalid && this.formAlumno.get('email').touched;
  }

  get locNoValida(){
    return this.formAlumno.get('localidad').invalid && this.formAlumno.get('localidad').touched;
  }

  get dptoNoValida(){
    return this.formAlumno.get('dpto').invalid && this.formAlumno.get('dpto').touched;
  }

  get nacNoValida(){
    return this.formAlumno.get('nacionalidad').invalid && this.formAlumno.get('nacionalidad').touched;
  }

  onSubmit(): void {
    this.submitted = true;
    this.guardar();
  }

  guardar(): void {
      let alumnoCreado = new Alumno();
      alumnoCreado.persona.nombre = this.formAlumno.get('nombre')?.value;
      alumnoCreado.persona.apellido = this.formAlumno.get('apellido').value;
      alumnoCreado.persona.documento = this.formAlumno.get('dni').value;
      alumnoCreado.persona.fecha_nacimiento = this.formAlumno.get('fecnac').value;
      alumnoCreado.persona.email = this.formAlumno.get('email').value;
      alumnoCreado.persona.telefono = this.formAlumno.get('telefono').value;
      alumnoCreado.persona.departamento = this.formAlumno.get('dpto').value;
      alumnoCreado.persona.localidad = this.formAlumno.get('localidad').value;
      alumnoCreado.persona.nacionalidad = this.formAlumno.get('nacionalidad').value;

      localStorage.setItem('datosAlumno', JSON.stringify(alumnoCreado));
      console.log(alumnoCreado);
      this.router.navigateByUrl('agregartutor');
  }
  
}

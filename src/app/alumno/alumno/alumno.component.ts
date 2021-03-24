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

  constructor(private router: Router, private fb: FormBuilder, private aluservice: AlumnoService) { }

  ngOnInit(): void {
    this.loading = true;
    this.errorMessage = '';

    this.formAlumno = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      dni: new FormControl(),
      fecnac: new FormControl(),
      email: new FormControl(),
      telefono: new FormControl(),
      localidad: new FormControl(),
      dpto: new FormControl(),
      nacionalidad: new FormControl()
    })

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

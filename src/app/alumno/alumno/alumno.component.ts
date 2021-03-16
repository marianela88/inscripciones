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
  loading: boolean = false;
  errorMessage;

  constructor(private router: Router, private fb: FormBuilder, private aluservice: AlumnoService) { }

  ngOnInit(): void {
  
    this.loading = true;
    this.errorMessage = "";

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

  // nextStep(){

  //   if(this.alumno.nombre != "" && this.alumno.apellido != "" && this.alumno.dni != null && this.alumno.fecnac != null && this.alumno.telefono != null && this.alumno.email != "" && this.alumno.localidad != "" && this.alumno.departamento != "" && this.alumno.nacionalidad != "" ){

  //         this.alumno = this.alumno;}

  //         this.router.navigateByUrl('/agregartutor');
  // }

  onSubmit() {
    this.submitted = true;
    this.guardar();

  }

  guardar(){
      let alumno_creado = new Alumno();
      
      alumno_creado.persona.nombre = this.formAlumno.get('nombre')?.value;
      alumno_creado.persona.apellido = this.formAlumno.get('apellido').value;
      alumno_creado.persona.dni = this.formAlumno.get('dni').value;
      alumno_creado.persona.fecnac = this.formAlumno.get('fecnac').value;
      alumno_creado.persona.email = this.formAlumno.get('email').value;
      alumno_creado.persona.telefono = this.formAlumno.get('telefono').value;
      alumno_creado.persona.departamento = this.formAlumno.get('dpto').value;
      alumno_creado.persona.localidad = this.formAlumno.get('localidad').value;
      alumno_creado.persona.nacionalidad = this.formAlumno.get('nacionalidad').value;
      console.log(alumno_creado)
      this.aluservice.agregarAlumno(alumno_creado)
      .subscribe(alumnoAgregado => console.log(alumnoAgregado),
    error => console.log(error)
    );
      



  }

}

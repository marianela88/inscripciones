import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno/alumno.component';
import { InscripcionComponent } from './inscripcion/inscripcion/inscripcion.component';
import { TutorComponent } from './tutor/tutor/tutor.component';

const routes: Routes = [
  { path: '#', redirectTo: 'home', pathMatch: 'full' },
  {path: 'agregaralumno', component: AlumnoComponent},
  {path: 'agregartutor', component: TutorComponent},
  {path: 'inscripcion', component:InscripcionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

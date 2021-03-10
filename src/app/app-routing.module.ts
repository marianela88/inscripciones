import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoComponent } from './alumno/alumno/alumno.component';
import { TutorComponent } from './tutor/tutor/tutor.component';

const routes: Routes = [
  { path: '#', redirectTo: 'home', pathMatch: 'full' },
  {path: 'agregaralumno', component: AlumnoComponent},
  {path: 'agregartutor', component: TutorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

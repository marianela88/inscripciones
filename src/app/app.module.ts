import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno/alumno.component';
import { TutorComponent } from './tutor/tutor/tutor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InscripcionComponent } from './inscripcion/inscripcion/inscripcion.component';


@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    TutorComponent,
    InscripcionComponent      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

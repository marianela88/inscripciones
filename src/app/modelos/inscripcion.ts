import { Alumno } from "./alumno";
import { Escuela } from "./escuela";
import { Tutor } from "./tutor";

export class Inscripcion{
    alumno_id: string;
    tutor_id: string;
    institucion_id: string;
    curso: string;
    nivel_educativo: string;

    constructor(){
        this.curso = this.curso
        this.nivel_educativo = this.nivel_educativo
        this.alumno_id = this.alumno_id
        this.tutor_id = this.tutor_id
        this.institucion_id = this.institucion_id
    }

}
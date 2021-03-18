import { Alumno } from "./alumno";
import { Escuela } from "./escuela";
import { Tutor } from "./tutor";

export class Inscripcion{
    alumno: Alumno;
    tutor: Tutor;
    institucion: Array<Lineas>;
    curso: string;
    nivel_educativo: string;

    constructor(){
        this.alumno = this.alumno
        this.tutor = this.tutor
        this.institucion = Array<Lineas>();
        this.curso = this.curso
        this.nivel_educativo = this.nivel_educativo
    }

    agregarEscuelaFila(escuela: Escuela){

        let institucion: Lineas = new Lineas();
        institucion.escuela = escuela;
                    
          this.institucion.filter(x => x.escuela.id == escuela.id).length      

            console.log(institucion)
              
            this.institucion.push(institucion);
             
    }

}

export class Lineas{
    escuela: Escuela;

    constructor(){
        this.escuela = this.escuela;
    }
}
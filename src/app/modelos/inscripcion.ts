import { Alumno } from "./alumno";
import { Escuela } from "./escuela";
import { Tutor } from "./tutor";

export class Inscripcion{
    alumno: Alumno;
    tutor: Tutor;
    institucion: Array<Escuela>;
    curso: string;
    nivel_educativo: string;

    constructor(){
        this.alumno = this.alumno
        this.tutor = this.tutor
        this.institucion = Array<Escuela>();
        this.curso = this.curso
        this.nivel_educativo = this.nivel_educativo
    }

    // agregarEscuelaFila(escuela: Escuela){

    //     let lineas: Inscripcion = new Inscripcion();
    //     lineas.institucion = this.institucion;
                    
    //       let existe: number = this.lineas.filter(x => x.producto.id == producto.id).length

  
    //       if(existe > 0){

    //         let posicion: number = this.lineas.findIndex(x => x.producto.id == producto.id)
    //         this.lineas[posicion].cantidad = this.lineas[posicion].cantidad++;
            
    //       }
    //       else{

    //         console.log(lineas)
              
    //         this.lineas.push(lineas);
    //       }        
    // }

}
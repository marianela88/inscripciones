import { Persona } from './persona';

export class Alumno{
    persona: Persona;
    codigoInscripcion: string;

    constructor(){
        this.persona = new Persona();
    }
}

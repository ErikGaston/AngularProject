import { Injectable } from '@angular/core';
import {Persona} from '../modelo/persona';
//decorador
@Injectable()
export class PersonaService{
    public personas: Array<Persona>
    constructor(){
        this.personas=
    [
      
      new Persona('Erik',
      'Martinez',
      26,
      38410931,
      3513823066,
      'erikgastonmartinez@gmail.com'),
      new Persona('Paula',
      'Fontana',
      29,
      35353535,
      3518358358,
      'pau.geo.fontana@gmail.com')
    ]
    }
    getPersonas(): Array<Persona>{
        return this.personas;
    }
    removePersonas(index){
        delete this.personas[index];
    }
}
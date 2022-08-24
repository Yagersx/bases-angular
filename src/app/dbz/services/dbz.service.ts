import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()
export class DbzServices {

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000
        },
        {
            nombre: 'Vegueta',
            poder: 15000
        }
    ];

    get personajes(): Personaje[] {
        // avoid references
        return [...this._personajes];
    }

    constructor() {
    }

    agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
    }


}
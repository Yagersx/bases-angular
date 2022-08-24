import { DbzServices } from './../services/dbz.service';
import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
})
export class AgregarPersonajeComponent {

  constructor(private dbzService:DbzServices){

  }

  @Input()
  nuevo:Personaje ={
    nombre:'',
    poder:0
  }

  agregar(){
    if(this.nuevo.nombre.trim().length==0){
      return;
    }

    console.log(this.nuevo);


    this.dbzService.agregarPersonaje(this.nuevo);
    
    
    this.nuevo ={ nombre:'', poder:0 }

  }

}

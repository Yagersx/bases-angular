import { DbzServices } from './../services/dbz.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-personajes',
  templateUrl: './listado-personajes.component.html',
  styleUrls: ['./listado-personajes.component.css']
})
export class ListadoPersonajesComponent{

  
  constructor(private dbzService:DbzServices){

  }

  get personajes(){
    return this.dbzService.personajes;
  }

}

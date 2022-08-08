import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes :string[] =['Spiderman','Spider','Heroe2','Heroe3'];

  heroeBorrado :string="";

  borrarUltimoHeroe():void{
     this.heroeBorrado = this.heroes.shift() || '';
  }
}

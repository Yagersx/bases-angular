import { DbzServices } from './services/dbz.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { ListadoPersonajesComponent } from './listado-personajes/listado-personajes.component';
import { AgregarPersonajeComponent } from './agregar-personaje/agregar-personaje.component';



@NgModule({
  declarations: [
    MainPageComponent,
    ListadoPersonajesComponent,
    AgregarPersonajeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent
  ],
  providers:[
    DbzServices
  ]
})
export class DbzModule { }

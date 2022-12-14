import { ListadoComponent } from './../heroes/listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent,
        HeroeComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HeroesModule{}
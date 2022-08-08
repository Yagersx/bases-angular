import { ContadorComponent } from './../contadores/contador/contador.component';
import { NgModule } from "@angular/core";

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[
        ContadorComponent
    ],
    imports:[]
})

export class ContadorModule{

}
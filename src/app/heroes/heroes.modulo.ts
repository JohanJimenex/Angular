import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";
import { CommonModule } from "@angular/common";

//Usamos modulos por componentes para organizar el codigo , y hacer que carge mas rapido nuestra web

//Decorador que se necestia para vincular los componentes
@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    //que cosas quiero que sena visibles fuera de este modulo
    exports: [
        HeroeComponent,
        ListadoComponent
    ],
    // aqui solo van modulos
    imports: [
        CommonModule // es par apoder usar las directivas como *ngFor y *ngIf
    ]
})

export class HeroesModule { }
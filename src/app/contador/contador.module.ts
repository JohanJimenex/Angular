import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
    // ,
    // imports: [
    // este "CommonModule" tiene las directivas como *NgFor y * NgIf pero como no se usa en este componente pues no es necesario
    //     CommonModule 
    // ]
})

export class ContadorModule { }
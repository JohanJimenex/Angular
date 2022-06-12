import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { ListPersonajesComponent } from './list-personajes/list-personajes.component';
import { AgregarComponent } from './agregar/agregar.component';

import { DbzService } from './services/dbz.service';



@NgModule({
  //aqui de colocan todos los componentes que pertenecen a este modulo
  declarations: [
    MainPageComponent,
    ListPersonajesComponent,
    AgregarComponent
  ],
  //aqui de colocan todos los componentes que se van a exportar para que otros modulos puedan importarlos 
  //En este caso solo se importa el MainPageComponenr porque este ya tiene adentro los componentes de  listado y agregado de personajes 
  exports: [
    MainPageComponent //esto luego se importa dentro de  'imports:[]' en otro modulo que quiera usarlo ej: el app-component
  ],
  imports: [
    //esto se usa para importar otro modulos, ya sea algunos de Angular, o nuestros propios modulos que necesitemos
    //trae las directivas como *NgFor y *NgIf entre otros.
    CommonModule,
    /* trae atributos como 'ngModel' que reemplaza el atributo 'value' para los inputs.
        ngSubmit, que se disrapa al hacer submit button*/
    FormsModule
  ],
  providers: [
    DbzService // se debe agregar en provider para que haya conexion entre todos los componentes
  ]
})
export class DbzModule { }

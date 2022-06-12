import { Component, Input } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { IPersonajeDBZ } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-list-personajes',
  templateUrl: './list-personajes.component.html'
})
export class ListPersonajesComponent {


  /*
  Con el decorador @Input(), es un puente para poder asignarle valor desde otros escript
  con los corchetes. eje: en una etiqueta html agregamos el atributo [DOSarrPersonajesDBZ]="valor a Asignar"
  desde otros componentes. Se acostumbra a colocar el mismo nombre a la variable.
  */
  // @Input('data') DOSarrPersojesDBZ: any[] = []; //podemos renombar la variable con el parametro de Input('xxx')
  // DOSarrPersojesDBZ: any[] = [];
  
  //Inyeccion de dependencia
  constructor(private dbzService: DbzService) { }

  get arrPersonajesDBZ(): IPersonajeDBZ[] {
    return this.dbzService.arrPersonajesDBZ;
  }


}

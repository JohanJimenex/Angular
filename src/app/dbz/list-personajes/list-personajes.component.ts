import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-personajes',
  templateUrl: './list-personajes.component.html'
})
export class ListPersonajesComponent {

  /*
  Con el decorador @Input(), es un puente para poder asignarle valor desde otros escript
  con los corchetes. eje: en una etiqueta html agregamos el atributo [DOSarrPersonajesDBZ]="valor a Asignar"
  desde otros componentes,se acostumbra a colocar el mismo nombre a la variable.
  */
  // @Input() DOSarrPersojesDBZ: any[] = [];
  @Input('data') DOSarrPersojesDBZ: any[] = []; //podemos renombar la variable con el parametro de Input('xxx')
  @Input() miVariableX: string = ""


}

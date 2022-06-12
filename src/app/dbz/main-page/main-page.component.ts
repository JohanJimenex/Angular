import { Component, Input } from '@angular/core';
import { IPersonajeDBZ } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  arrPersonajesDBZ: IPersonajeDBZ[] = []

  agregarPersonaje(arg: IPersonajeDBZ): void {

    this.arrPersonajesDBZ.push(arg);
  }


}

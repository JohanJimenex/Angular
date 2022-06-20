import { Component, Input } from '@angular/core';
import { IPersonajeDBZ } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {



  //Inyeccion de dependencia para tener una isntancia de DbzServices
  // constructor(private dbzService: DbzService) { }
  
  // arrPersonajesDBZ: IPersonajeDBZ[] = this.dbzService.arrPersonajesDBZ;

  
  // agregarPersonaje(arg: IPersonajeDBZ): void {

  //   this.arrPersonajesDBZ.push(arg);
  // }

  //Se peude usar un get tambien como opcion. funciona como la misma variable arrPersonajesDBZ
  // get arrPersonajesDBZ(): IPersonajeDBZ[] {
  //   return this.dbzService.arrPersonajesDBZ;
  // }




}

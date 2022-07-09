import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPersonajeDBZ } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {


  //cn este decorador podemos mandar datos a esta variable desde el html con el atributo [TRESarrPersonajesDBZ]="klk"
  // @Input() TRESarrPersonajesDBZ: IPersonajeDBZ[] = []

  personajeDBZ: IPersonajeDBZ = {
    nombre: '',
    nivelDePelea: 0
  }

  //El decorador @Output() nos permite crear nuestros propios eventos ej: (onNuevoPersonaje)  
  // @Output() onNuevoPersonaje: EventEmitter<IPersonajeDBZ> = new EventEmitter<IPersonajeDBZ>();
  //combinado con .emit(datoAenviar) ejecutamos la funcion que envia datos como parametro

  //Inyeccion de dependencia
  constructor(private dbzService: DbzService) { }

  agregarPersonaje(): void {
    //el parametro event ya no es necesario
    // agregarPersonaje(event: any): void {
    // let valorInput = event.target.value;
    // this.personajeDBZ.nombre = valorInput


    // this.TRESarrPersonajesDBZ.push(this.personajeDBZ);
    //con .emit() ejecutamos la funcion que envia datos como parametro
    // this.onNuevoPersonaje.emit(this.personajeDBZ);
    // this.dbzService.arrPersonajesDBZ.push(this.personajeDBZ);


    if (this.personajeDBZ.nombre.trim().length === 0) { return; }

    this.dbzService.agregarPersonaje(this.personajeDBZ);

    this.personajeDBZ = {
      nombre: "",
      nivelDePelea: 0
    }

  }





}

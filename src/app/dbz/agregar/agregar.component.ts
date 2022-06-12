import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPersonajeDBZ } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  // @Input() TRESarrPersonajesDBZ: IPersonajeDBZ[] = []

  @Input() personajeDBZ: IPersonajeDBZ = {
    nombre: '',
    nivelDePelea: 0
  }


  //El decorador @Output() nos permite crear nuestros propios eventos ej: (onNuevoPersonaje)  
  @Output() onNuevoPersonaje: EventEmitter<IPersonajeDBZ> = new EventEmitter<IPersonajeDBZ>();

  agregarPersonaje(): void {
    //el parametro event ya no es necesario
    // agregarPersonaje(event: any): void {
    // let valorInput = event.target.value;
    // this.personajeDBZ.nombre = valorInput

    if (this.personajeDBZ.nombre.trim().length === 0) { return; }

    // this.TRESarrPersonajesDBZ.push(this.personajeDBZ);
    //con .emit() ejecutamos la funcion que envia datos como parametro
    this.onNuevoPersonaje.emit(this.personajeDBZ);

    this.personajeDBZ = {
      nombre: "",
      nivelDePelea: 0
    }
  }


}

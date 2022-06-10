import { Component } from '@angular/core';


interface IPersonajeDBZ {
  nombre: string,
  nivelDePelea: number
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  arrPersonajesDBZ: IPersonajeDBZ[] = []

  PersonajeDBZ: IPersonajeDBZ = {
    nombre: "",
    nivelDePelea: 0
  }



  agregarPersonaje(): void {
    //el parametro event ya no es necesario
    // agregarPersonaje(event: any): void {
    // let valorInput = event.target.value;
    // this.PersonajeDBZ.nombre = valorInput

    if (this.PersonajeDBZ.nombre.trim()) {
      
    }


    this.arrPersonajesDBZ.push(this.PersonajeDBZ);

  }


}

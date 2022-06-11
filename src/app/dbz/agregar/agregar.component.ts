import { Component, Input, OnInit } from '@angular/core';
import { IPersonajeDBZ } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent {

  @Input() personajeDBZ:IPersonajeDBZ = {
    nombre: '',
    nivelDePelea: 0
  }

}

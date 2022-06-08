import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nombre del componente , se usa en el html principal
  // template: '<h1>heelllo</h1>', //Agrega codigo html 
  templateUrl: './app.component.html', //ruta del archivo que se suara como componente
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public titulo: string = 'Contador App';
  public numero: number = 0;
  public base: number = 5

  modificarContador(valor: number): void {
    this.numero += valor;
  }

  nombre = "dell"



}

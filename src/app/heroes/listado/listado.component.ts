import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  arrHeroes: string[] = ["Spiderman", "Ironman", "Hulk", "Thor", "Superman", "Batman"]


  heroeEliminado: string = "";

  eliminarHerore(): void {
    this.heroeEliminado = this.arrHeroes.shift() || "";
  }


}

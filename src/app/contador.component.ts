
import { Component } from "@angular/core";



@Component({
    selector: 'app-contador',
    template: `
       <h1>{{titulo}}</h1>

        <h3>La base es: <strong>{{base}}</strong></h3>

        <button (click)="modificarContador(-base);">Disminuir - {{base}}</button>
        <span style="font-size: 50px;">{{numero}}</span>
        <button (click)="modificarContador(base);">Aumentar + {{base}}</button>
    `
})

export class ContadorComponent {

    public titulo: string = 'Contador App';
    public numero: number = 0;
    public base: number = 5

    modificarContador(valor: number): void {
        this.numero += valor;
    }

}
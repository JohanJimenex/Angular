import { Component } from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl: "./heroe.component.html"

})

export class HeroeComponent {

    public nombre: string = "Spiderman";
    private edad: number = 31;

    get NombreCapitalizado(): string {
        return this.nombre.toLocaleUpperCase();
    }

    get Edad(): number {
        return this.edad;
    }


    obtenerNombre(): string {

        return `${this.nombre} - ${this.edad}`
    }

    cambiarNombre(): void {

        if (this.nombre == "Johan") {
            this.nombre = "Spider Man";
        } else {
            this.nombre = "Johan"
        }

    }
    cambiarEdad(): void {
        this.edad = 50;
    }

}
import { Injectable } from "@angular/core";



//Todos los servicios deben llevar este decorador
@Injectable()
export class DbzService {

    constructor() {
        console.log("servicios inicializado");

    }

}
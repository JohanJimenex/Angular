import { Injectable } from "@angular/core";
import { IPersonajeDBZ } from '../interfaces/dbz.interface';



//Todos los servicios deben llevar este decorador y se debe colocar en el modulo dentro de 'providers'
//todo componente que inyecte este servicio con el contrsuctor, tendra acceo a estos datos
//esto aplica el patron singletom que permite instanciar la misma clase en diferentes lugares para mantener un solo dato
@Injectable()
export class DbzService {

    private _arrPersonajesDBZ: IPersonajeDBZ[] = [{
        nombre: "por defecto a traves del servicios",
        nivelDePelea: 9999
    }]

    // constructor() { }

    get arrPersonajesDBZ(): IPersonajeDBZ[] {
        return this._arrPersonajesDBZ;

        // return [...this._arrPersonajesDBZ];
        /*opcional: para re crear un arreglo nuevo al momento de mandarlo
         ya que js manda los objetos por referencias*/
    }

    agregarPersonaje(valor: IPersonajeDBZ): void {
        this._arrPersonajesDBZ.push(valor);
    }

}
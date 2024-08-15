
import { Component } from '@angular/core';
import { ApiGeneralService } from '../../../services/api-general.service';

@Component({
    selector: 'app-inventario',
    standalone: true,
    imports: [],
    templateUrl: './inventario.component.html',
    styleUrl: './inventario.component.css'
})
export class InventarioComponent {
    dataProductos:any
    constructor(private _api:ApiGeneralService){}

    ngOnInit(){
        this.obtenerProductos()
    }

    obtenerProductos(){
        this._api.getObtenerProductos().subscribe((data:any) => {
            this.dataProductos = data
            console.log(this.dataProductos);

        })
    }

}

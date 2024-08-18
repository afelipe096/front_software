
import { Component } from '@angular/core';
import { ApiGeneralService } from '../../../services/api-general.service';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-inventario',
    standalone: true,
    imports: [FormsModule],
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
    actualizarUnidades(producto: any) {
        producto.cantidad = parseInt(producto.cantidad || 0) + 1;
        producto.cantidadAgregada = 1;
    }


}

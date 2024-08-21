import { Component } from '@angular/core';
import { ApiGeneralService } from '../../services/api-general.service';

@Component({
  selector: 'app-ventas',
  standalone: true,
  imports: [],
  templateUrl: './ventas.component.html',
  styleUrl: './ventas.component.css'
})
export class VentasComponent {
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

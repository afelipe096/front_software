import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiGeneralService } from '../../../services/api-general.service';
import { FormularioProductosComponent } from '../../formulario.productos/formulario.productos.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-agregar-producto',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormularioProductosComponent,
        CommonModule
    ],
    templateUrl: './agregar-producto.component.html',
    styleUrl: './agregar-producto.component.css'
})
export class AgregarProductoComponent {
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

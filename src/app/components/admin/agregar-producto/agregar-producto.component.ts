import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiGeneralService } from '../../../services/api-general.service';
import { FormularioProductosComponent } from '../../formulario.productos/formulario.productos.component';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

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


        }) ;

    }
    eliminarGenero(id: string) {
        Swal.fire({
            title: "Esta seguro de eliminar el genero",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Eliminar",
            cancelButtonText: "Cancelar"
        }).then((result: any) => {
            if (result.isConfirmed) {
                this._api.deleteProducto(id).subscribe((data: any) => {
                    this.obtenerProductos();
                });
                Swal.fire({
                    title: "producto eliminado correctamente",
                });
            }
        });
    }
}

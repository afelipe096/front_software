import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiGeneralService } from '../../services/api-general.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';



@Component({
    selector: 'app-formulario.productos',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        CommonModule,

    ],
    templateUrl: './formulario.productos.component.html',
    styleUrl: './formulario.productos.component.css'
})
export class FormularioProductosComponent {
    infoProductos: any[] = []
    formProductos: FormGroup;

    constructor(
        private fb: FormBuilder,
        private _apiServicio: ApiGeneralService
    ) {
        this.formProductos = this.fb.group({
            imagen: ['', Validators.required],
            producto: ['', Validators.required],
            precio: ['', Validators.required]
        })


    }

    ngOnInit(): void {

    }

    guardarInformacion() {
        let productoData = {
            imagen: this.formProductos.get('imagen')?.value,
            producto: this.formProductos.get('producto')?.value,
            precio: this.formProductos.get('precio')?.value
        }

        this._apiServicio.postCrearProductos(this.formProductos.value).subscribe((data) => {
            console.log(data);
            alert('producto creado con exito')

            setTimeout(() => {
                location.reload()
            },500);
        })
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
                this._apiServicio.deleteProducto(id).subscribe((data: any) => {
                    this.guardarInformacion();
                });
                Swal.fire({
                    title: "producto eliminado correctamente",
                });
            }
        });
    }

}

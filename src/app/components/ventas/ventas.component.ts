import { Component } from '@angular/core';
import { ApiGeneralService } from '../../services/api-general.service';
import { infoProducto } from '../../models/estructuras';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ventas',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './ventas.component.html',
    styleUrl: './ventas.component.css'
})
export class VentasComponent {
    dataProductos: any
    constructor(private _api: ApiGeneralService) { }
    carritoActual: any
    totalCompra!: number
    ngOnInit() {
        this.obtenerProductos()
        this.actualizacionResumenCompra()
    }

    obtenerProductos() {
        this._api.getObtenerProductos().subscribe((data: any) => {
            this.dataProductos = data
            console.log(this.dataProductos);

        })
    }

    agregarProductoLS(infoProducto: infoProducto) {
        if (localStorage.getItem("lista-carrito") == null) {
            let arrCarrito = []
            infoProducto.cantidad = 1
            arrCarrito.push(infoProducto)
            localStorage.setItem("lista-carrito", JSON.stringify(arrCarrito))
        } else {
            let arrCarrito: any = localStorage.getItem("lista-carrito")
            arrCarrito = JSON.parse(arrCarrito!)

            let posicionProducto = arrCarrito.findIndex((itemCarrito: any) => itemCarrito.nombre == infoProducto.nombre)
            let infocarritoProducto = arrCarrito.find((itemCarrito: any) => itemCarrito.nombre == infoProducto.nombre)

            if (infocarritoProducto != undefined) {
                infoProducto.cantidad = parseInt(infocarritoProducto.cantidad) + 1
            } else {
                infoProducto.cantidad = 1
            }

            if (posicionProducto == -1) {
                arrCarrito.push(infoProducto)
            } else {
                arrCarrito[posicionProducto] = infoProducto
            }
            localStorage.setItem("lista-carrito", JSON.stringify(arrCarrito))
        }
        this.actualizacionResumenCompra()
    }

    actualizacionResumenCompra() {
        this.totalCompra = 0
        this.carritoActual = JSON.parse(localStorage.getItem("lista-carrito")!)
        this.carritoActual.forEach((producto: any) => {
            this.totalCompra = (producto.valor * producto.cantidad) + this.totalCompra
        });
    }

    modificarProductoResumen(accion: string, cantidad: number, posicion: number) {
        console.log(accion)
        let carrito:any = JSON.parse(localStorage.getItem("lista-carrito")!)
        switch (accion) {
            case 'restar':
                if (cantidad > 1) {
                    carrito[posicion].cantidad = carrito[posicion].cantidad - 1
                } else {
                    carrito.splice(posicion, 1)
                }
                break;
                case 'sumar':
                    carrito[posicion].cantidad = carrito[posicion].cantidad + 1
                    break;
                }
                this.carritoActual = carrito
                localStorage.setItem("lista-carrito", JSON.stringify(this.carritoActual))
                this.actualizacionResumenCompra()
    }
}

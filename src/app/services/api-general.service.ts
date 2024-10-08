import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { inventario, productos } from '../components/models/productos';


@Injectable({
    providedIn: 'root'
})
export class ApiGeneralService {
    // urlApi: string = 'http://3.145.120.149:5200/api/facturacion';
    urlApi: string = 'http://localhost:5200/api/facturacion';

    seLogueo: any = true


    constructor(private http: HttpClient) { }

    Login(data: any) {
        return this.http.post(`${this.urlApi}/login`, data);
    }

    postRegistroUsuario(data: any) {
        return this.http.post(`${this.urlApi}/register`, data)
    }

    postCrearProductos(dataProducto: productos) {
        return this.http.post(`${this.urlApi}/crear-producto`, dataProducto)
    }

    getObtenerProductos() {
        return this.http.get(`${this.urlApi}/obtener-productos`)
    }
    deleteProducto(id: string) {
        return this.http.delete(`${this.urlApi}/eliminar-producto/${id}`);
    }

    putmodificarInventario(inventarioData:inventario) {
        return this.http.put(`${this.urlApi}/modificar-inventario/:id`,inventarioData)
    }

////////validacion


}

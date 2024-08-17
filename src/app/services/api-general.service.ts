import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productos } from '../components/models/productos';

@Injectable({
    providedIn: 'root'
})
export class ApiGeneralService {
    // urlApi: string = 'http://3.145.120.149:5200/api/facturacion';
    urlApi: string = 'http://localhost:3000/api/facturacion';
    // seLogueo: any = false


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

////////validacion


}

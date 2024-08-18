export class productos {
    _id?: string
    imagen: string
    producto: string
    precio: string


constructor(imagen: string, producto: string, precio: string){
    this.imagen = imagen
    this.producto = producto
    this.precio = precio
}

}

export class inventario{
    _id?: string
    cantidad: string

    constructor(cantidad:string){
        this.cantidad = cantidad
    }
}

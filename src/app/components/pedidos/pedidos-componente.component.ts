import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-pedidos-componente',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: './pedidos-componente.component.html',
    styleUrl: './pedidos-componente.component.css'
})
export class PedidosComponenteComponent {
    comprasGuardadas: { detalles: string; total: number }[] = [];

    constructor() { }

    ngOnInit(): void {
        this.loadCompras();
    }

    agregarCompra(detalles: string, total: number): void {
        const nuevaCompra = {
            detalles,
            total
        };
        this.comprasGuardadas.push(nuevaCompra);
        this.saveCompras();
    }

    eliminarCompra(index: number): void {
        this.comprasGuardadas.splice(index, 1);
        this.saveCompras();
    }

    saveCompras(): void {
        localStorage.setItem('compras', JSON.stringify(this.comprasGuardadas));
    }

    loadCompras(): void {
        const storedCompras = localStorage.getItem('compras');
        if (storedCompras) {
            this.comprasGuardadas = JSON.parse(storedCompras);
        }
    }
}

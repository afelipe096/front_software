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
    comprasGuardadas: number[] = [];

    ngOnInit() {
        // Recuperar la lista de compras del localStorage
        const compras = JSON.parse(localStorage.getItem('compras') || '[]');
        this.comprasGuardadas = compras;
    }
    eliminarCompra(indice: number) {
        // Eliminar el elemento en el índice especificado
        this.comprasGuardadas.splice(indice, 1);

        // Actualizar el localStorage con la nueva lista
        localStorage.setItem('compras', JSON.stringify(this.comprasGuardadas));
    }
}


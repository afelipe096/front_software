import { Routes } from '@angular/router';
import { AgregarProductoComponent } from './components/admin/agregar-producto/agregar-producto.component';
import { EstadisticasComponent } from './components/admin/estadisticas/estadisticas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InventarioComponent } from './components/admin/inventario/inventario.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { PedidosComponenteComponent } from './components/pedidos/pedidos-componente.component';






export const routes: Routes = [

    { path: "crear-producto", component: AgregarProductoComponent },
    { path: "estadisticas", component: EstadisticasComponent },
    { path: "contacto", component: ContactoComponent },
    { path: "inventario", component: InventarioComponent},
    { path: "ventas", component: VentasComponent},
    { path: 'pedidos', component: PedidosComponenteComponent },
];

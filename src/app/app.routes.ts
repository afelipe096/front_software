import { Routes } from '@angular/router';




import { AgregarProductoComponent } from './components/admin/agregar-producto/agregar-producto.component';
import { EstadisticasComponent } from './components/admin/estadisticas/estadisticas.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InventarioComponent } from './components/admin/inventario/inventario.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { FormularioInicioComponent } from './components/admin/formulario-inicio/formulario-inicio.component';
import { FormularioRegistroComponent } from './components/admin/formulario-registro/formulario-registro.component';

export const routes: Routes = [
    { path: 'crear-producto', component: AgregarProductoComponent },
    { path: 'estadisticas', component: EstadisticasComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'inventario', component: InventarioComponent },
    { path: 'ventas', component: VentasComponent },
    { path: 'login', component: FormularioInicioComponent },
    { path: 'registro', component: FormularioRegistroComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' } // Ruta por defecto
];

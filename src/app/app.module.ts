import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes'; // Ruta correcta si app.routes.ts está en el mismo directorio que app.module.ts

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Configura el enrutador con las rutas exportadas
  ],
  providers: [],
})
export class AppModule { }

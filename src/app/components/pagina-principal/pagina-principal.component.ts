import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiGeneralService } from '../../services/api-general.service';
import { FormularioRegistroComponent } from "../admin/formulario-registro/formulario-registro.component";
import { FormularioInicioComponent } from '../admin/formulario-inicio/formulario-inicio.component';

@Component({
    selector: 'app-pagina-principal',
    standalone: true,
    imports: [
    ReactiveFormsModule,
    FormularioRegistroComponent,
    FormularioInicioComponent
],
    templateUrl: './pagina-principal.component.html',
    styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

    formPrincipal: FormGroup;

    constructor(
        private fb: FormBuilder,
        private _apiServicio: ApiGeneralService
    ) {
        this.formPrincipal = this.fb.group({
            nombres:['',Validators.required]  ,
            apellidos:['',Validators.required]  ,
            clave: ['',Validators.required] ,
            rectificar_clave: ['',Validators.required] ,
            correoElectronico: ['',Validators.required] ,
            fechaNacimiento:  ['',Validators.required] ,
        })

    }

    RegistroUsuario(){
        if(this.formPrincipal.valid){
            this._apiServicio.postRegistroUsuario(this.formPrincipal.value).subscribe((data:any) =>{
                console.log(data);
            })
        }
    }
}

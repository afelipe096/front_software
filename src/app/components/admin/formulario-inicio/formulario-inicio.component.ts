import { Component } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
  } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiGeneralService } from '../../../services/api-general.service';
import  Swal  from 'sweetalert2'

@Component({
  selector: 'app-formulario-inicio',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-inicio.component.html',
  styleUrl: './formulario-inicio.component.css'
})
export class FormularioInicioComponent {

    inicio: FormGroup;

    regexAlfa = /^[a-zA-Z0-9._-]{3,20}$/;
    regexcontraseña= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10}$/;
    regexEmail =
    /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;



    constructor(private router: Router, private fb: FormBuilder, private _api:ApiGeneralService) {
        this.inicio = this.fb.group({
            username: [
                '',
                [Validators.required, Validators.pattern(this.regexAlfa)],
              ],

              email: [
                '',
                [Validators.required, Validators.pattern(this.regexEmail)],
              ],


            password: ['', [Validators.required, Validators.pattern(this.regexcontraseña)]],



          });
    }


    clearSessionStorage() {
        sessionStorage.clear();
        location.reload();
    }

    Inicio(){
        console.log(this.inicio.value);

        this._api.Login(this.inicio.value).subscribe(
            (respuestaAPI) => {
              Swal.fire({
                title: 'Ha iniciado session correctamente!',
                icon: 'success',
              });
              let dataApi: any = respuestaAPI;
              console.log(respuestaAPI);
              setTimeout(() => {
                this.router.navigate(['crear-producto']);
              }, 2000);
            },
            (error) => {
              Swal.fire({
                title: 'No se pudo iniciar sesion!',
                icon: 'error',
              });
            }
          );
        }
}

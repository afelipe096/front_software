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
  selector: 'app-formulario-registro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formulario-registro.component.html',
  styleUrl: './formulario-registro.component.css'
})
export class FormularioRegistroComponent {

    registro: FormGroup;

    regexAlfa = /^[a-zA-Z0-9._-]{3,20}$/;
    regexcontraseña= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10}$/;
    regexEmail =
    /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}/;



    constructor(private router: Router, private fb: FormBuilder, private _api:ApiGeneralService) {
        this.registro = this.fb.group({
            username: [
                '',
                [Validators.required, Validators.pattern(this.regexAlfa)],
              ],
            name: [
              '',
              [Validators.required, Validators.pattern(this.regexAlfa)],
            ],
            lastName: [
                '',
                [Validators.required, Validators.pattern(this.regexAlfa)],
              ],
              email: [
                '',
                [Validators.required, Validators.pattern(this.regexEmail)],
              ],


            password: ['', [Validators.required, Validators.pattern(this.regexcontraseña)]],

            phone: ['', [Validators.required, Validators.minLength(10)]]


          });
    }


    clearSessionStorage() {
        sessionStorage.clear();
        location.reload();
    }

    Registro(){
        console.log(this.registro.value);

        this._api.postRegistroUsuario(this.registro.value).subscribe(
            (respuestaAPI) => {
              Swal.fire({
                title: 'Usuario creado correctamente!',
                icon: 'success',
              });
              let dataApi: any = respuestaAPI;
              console.log(respuestaAPI);
              setTimeout(() => {
                this.router.navigate(['login']);
              }, 2000);
            },
            (error) => {
              Swal.fire({
                title: 'El correo electronico ya existe!',
                icon: 'error',
              });
            }
          );
        }




 }



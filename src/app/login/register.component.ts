import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../services/services.index';
import { Usuario } from '../models/usuario.model';

import swal from 'sweetalert2';

declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  formulario: FormGroup;

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit() {
    init_plugins();

    this.formulario = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      correo: new FormControl(null, [Validators.required, Validators.email]),
      contraseña: new FormControl(null, Validators.required),
      contraseña2: new FormControl(null, Validators.required),
      terminos: new FormControl(false)
    }, this.contraseñasIguales('contraseña', 'contraseña2'));
  }

  registro() {
    if (this.formulario.invalid) {
      return;
    }

    if (!this.formulario.value.terminos) {
      swal('Importante', 'Debes aceptar los términos y condiciones', 'warning');
      return;
    }

    const usuario = new Usuario(
      this.formulario.value.nombre,
      this.formulario.value.correo,
      this.formulario.value.contraseña
    );

    this.usuarioService.crearUsuario(usuario).subscribe((data) => this.router.navigate(['/login']));
  }

  contraseñasIguales(valor1: string, valor2: string) {
    return (group: FormGroup) => {
      let contraseña = group.controls[valor1].value;
      let contraseña2 = group.controls[valor2].value;

      if (contraseña == contraseña2) {
        return null;
      }

      return {diferentes: true};
    };
  }

}

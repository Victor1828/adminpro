import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Usuario } from '../models/usuario.model';
import { UsuarioService } from '../services/services.index';
import { GOOGLE_ID } from '../config/config';

declare function init_plugins();
declare const gapi;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo: string;
  recordar: boolean;
  auth2: any;

  constructor(private router: Router, private usuarioService: UsuarioService) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.correo = localStorage.getItem('correo') || '';

    if (this.correo.length > 1) {
      this.recordar = true;
    }
  }

  ingresar(formulario: NgForm) {
    if (formulario.invalid) {
      return;
    }

    const usuario = new Usuario(null, formulario.value.correo, formulario.value.contraseña);

    this.usuarioService.login(usuario, formulario.value.recordar).subscribe((data) => this.router.navigate(['/dashboard']));
  }

  googleInit() {
    const btnGoogle = document.getElementById('btnGoogle');
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: GOOGLE_ID,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachGoogleSignIn(btnGoogle);
    });
  }

  attachGoogleSignIn(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {
      const token = googleUser.getAuthResponse().id_token;
      this.usuarioService.loginGoogle(token).subscribe((data) => window.location.href = '/dashboard');
    });
  }

}

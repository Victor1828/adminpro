import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIOS } from '../../config/config';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

import swal from 'sweetalert2';

@Injectable()
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(private http: HttpClient, private router: Router,
    private subirArchivoService: SubirArchivoService) {
    this.cargarStorage();
  }

  crearUsuario(usuario: Usuario) {
    const url = `${URL_SERVICIOS}/usuario`;

    return this.http.post(url, usuario).map((data) => {
      swal('Usuario creado', data['usuario'].correo, 'success');
      return data['usuario'];
    });
  }

  login(usuario: Usuario, recordar: boolean) {
    const url = `${URL_SERVICIOS}/login`;

    if (recordar) {
      localStorage.setItem('correo', usuario.correo);
    } else {
      localStorage.removeItem('correo');
    }

    return this.http.post(url, usuario).map((data) => {
      this.guardarStorage(data['id'], data['token'], data['usuario']);
      return true;
    });
  }

  guardarStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }

  cargarStorage() {
    if (localStorage.getItem('token')) {
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
      this.token = localStorage.getItem('token');
    } else {
      this.usuario = null;
      this.token = '';
    }
  }

  estaLogueado() {
    return (localStorage.getItem('token')) ? true : false;
  }

  loginGoogle(token: string) {
    const url = `${URL_SERVICIOS}/login/google`;

    return this.http.post(url, {token}).map((data) => {
      this.guardarStorage(data['id'], data['token'], data['usuario']);
      return true;
    });
  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    localStorage.removeItem('id');

    this.router.navigate(['/login']);
  }

  actualizarUsuario(usuario: Usuario) {
    const url = `${URL_SERVICIOS}/usuario/${usuario._id}?token=${this.token}`;

    return this.http.put(url, usuario).map((data) => {
      const usuarioNuevo = data['usuario'];

      this.guardarStorage(usuarioNuevo._id, this.token, usuarioNuevo);
      swal('Usuario actualizado', usuarioNuevo.nombre, 'success');

      return true;
    });
  }

  cambiarImagen(imagen: File, id: string) {
    this.subirArchivoService.subirArchivo(imagen, 'usuarios', id)
    .then((resp) => {
      this.usuario.img = resp['usuario'].img;
      swal('Imagen actualizada', this.usuario.nombre, 'success');
      this.guardarStorage(id, this.token, this.usuario);
    })
    .catch((resp) => console.error(resp));
  }
}

import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/services.index';
import { Usuario } from '../../models/usuario.model';

import swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: [ `
    button:disabled {
      cursor: not-allowed;
    }
    .w150 {
      width: 150px;
    }
    `
  ]
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  imagen: File;
  imgTemp: string;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
  }

  guardar(usuario: Usuario) {
    this.usuario.nombre = usuario.nombre;

    if (!this.usuario.google) {
      this.usuario.correo = usuario.correo;
    }

    this.usuarioService.actualizarUsuario(this.usuario).subscribe();
  }

  subirImagen(imagen: File) {
    if (!imagen) {
      this.imagen = null;
      return;
    }

    if (imagen.type.indexOf('image') < 0) {
      swal('Sólo imagenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagen = null;
      return;
    }

    this.imagen = imagen;

    const reader = new FileReader();
    const urlImgTemp = reader.readAsDataURL(imagen);
    reader.onloadend = () => this.imgTemp = reader.result;
  }

  cambiarImagen() {
    this.usuarioService.cambiarImagen(this.imagen, this.usuario._id);
  }
}

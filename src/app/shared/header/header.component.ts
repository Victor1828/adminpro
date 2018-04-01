import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../../services/services.index';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [`
    .notify .heartbit.white{
      border: 5px solid rgba(255, 255, 255, 0.8);
    }
    .notify .point.white{
      background-color: rgba(255, 255, 255, 0.8);
    }
  `]
})
export class HeaderComponent implements OnInit {

  usuario: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.color();
    this.usuario = this.usuarioService.usuario;
  }

  color() {
    const tema = JSON.parse(localStorage.getItem('ajustes'));
    if(tema.nombreTema == 'red' || tema.nombreTema == 'red-dark') {
      return true;
    }
    return false;
  }
}

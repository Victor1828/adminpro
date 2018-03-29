import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/services.index';

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

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.color();
  }

  color() {
    let tema = JSON.parse(localStorage.getItem('ajustes'));
    if(tema.nombreTema == 'red' || tema.nombreTema == 'red-dark') {
      return true;
    }
    return false;
  }
}

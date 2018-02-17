import { Injectable } from '@angular/core';
import { Ajustes } from '../interfaces/ajustes';

@Injectable()
export class SettingsService {

  ajustes: Ajustes = {
    temaURL: "assets/css/colors/default.css",
    nombreTema: "default"
  }

  constructor() {
    this.cargarTema();
  }

  guardarTema() {
    localStorage.setItem('ajustes', JSON.stringify(this.ajustes));
  }

  cargarTema() {
    if(localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.nombreTema);
    }else {
      this.aplicarTema(this.ajustes.nombreTema);
    }
  }

  aplicarTema(tema:string) {
    let url = `assets/css/colors/${tema}.css`
    document.getElementById('tema').setAttribute('href', url);
    this.ajustes = {
      temaURL: url,
      nombreTema: tema
    }
    this.guardarTema();
  }
}

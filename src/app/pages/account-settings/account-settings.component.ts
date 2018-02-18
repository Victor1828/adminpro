import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/services.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [`
    .selector {
      cursor: pointer;
    }
  `]
})
export class AccountSettingsComponent implements OnInit {

  constructor(private ajustesService: SettingsService) { }

  ngOnInit() {
    this.revisarMarca();
  }

  cambiarTema(tema:string, elemento:any) {
    this.marcar(elemento);
    this.ajustesService.aplicarTema(tema);
  }

  marcar(elemento:any) {
    let selectores:any = document.getElementsByClassName('selector');
    for(let ref of selectores) {
      ref.classList.remove('working');
    }
    elemento.classList.add('working');
  }

  revisarMarca() {
    let tema = this.ajustesService.ajustes.nombreTema;
    let selectores:any = document.getElementsByClassName('selector');
    for(let ref of selectores) {
      if(ref.getAttribute('data-theme') == tema) {
        ref.classList.add('working');
        break;
      }
    }
  }

}

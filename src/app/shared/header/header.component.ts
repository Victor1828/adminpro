import { Component, OnInit } from '@angular/core';

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

  constructor() { }

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

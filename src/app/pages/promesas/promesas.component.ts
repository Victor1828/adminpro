import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    this.promesa().then(mensaje => console.log('Terminado'))
    .catch(error => console.error('Hubo un error', error));
  }

  ngOnInit() {
  }

  promesa(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;
        console.log(contador);

        if(contador == 3) {
          resolve(true);
          clearInterval(intervalo);
        }

      }, 1000);
    });
  }

}

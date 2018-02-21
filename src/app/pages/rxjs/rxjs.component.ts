import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';
// import { Subscription } from 'rxjs/Subscription';
// import 'rxjs/add/operator/retry';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy{

  subs: Subscription

  constructor() {
    this.subs = this.obs().subscribe(
      numero => console.log(numero),
      error => console.error('Hubo un error', error),
      () => console.log('Terminado')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  obs(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador++;
        let salida = {
          valor: contador
        }
        observer.next(salida);
        // if(contador == 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if(contador == 2) {
        //   //clearInterval(intervalo);
        //   observer.error('Help!');
        // }
      }, 1000);
    }).retry(2).map(res => res['valor'])
    .filter(value => {
      if(value % 2 == 1) {
        return true;
      }
      return false;
    });
  }

}

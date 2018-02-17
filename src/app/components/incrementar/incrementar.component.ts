import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementar',
  templateUrl: './incrementar.component.html',
  styles: []
})
export class IncrementarComponent implements OnInit {

  @Input() leyenda: string = "Leyenda";
  @Input() porcentaje: number = 50;

  @Output() nuevoValor: EventEmitter<number> = new EventEmitter();

  @ViewChild('progressInput') progressInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  cambiarValor(valor:number) {
    if(this.porcentaje <= 0 && valor < 0 ) {
      this.porcentaje = 0;
      return;
    }

    if(this.porcentaje >= 100 && valor > 0) {
      this.porcentaje = 100;
      return;
    }

    this.porcentaje += valor;

    this.nuevoValor.emit(this.porcentaje);
  }

  limite(valor: number) {
    if(valor >= 100) {
      this.porcentaje = 100;
    }else if(valor <= 0) {
      this.porcentaje = 0;
    }else {
      this.porcentaje = valor;
    }

    this.progressInput.nativeElement.value = this.porcentaje;
    this.nuevoValor.emit(this.porcentaje);
    this.progressInput.nativeElement.focus();
  }
}

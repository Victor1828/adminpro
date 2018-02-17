import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-donas',
  templateUrl: './grafica-donas.component.html',
  styles: []
})
export class GraficaDonasComponent implements OnInit {

  @Input() chartLabel: string[];
  @Input() chartData: number[];
  @Input() chartType: string;
  @Input() leyenda: string;

  constructor() { }

  ngOnInit() {
  }

}

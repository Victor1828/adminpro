import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/services.index';

declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(private ajustesService: SettingsService) { }

  ngOnInit() {
    init_plugins();
  }

}

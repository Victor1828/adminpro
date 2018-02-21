import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Meta, Title, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  label:string = "";
  
  constructor(private router: Router, private titulo: Title, private meta: Meta) {
    this.labelRuta().subscribe(data => {
      this.label = data.titulo;
      this.titulo.setTitle(this.label);
      let tag: MetaDefinition = {
        name: 'description',
        content: this.label
      };
      this.meta.updateTag(tag);
    });
  }

  ngOnInit() {
  }

  labelRuta() {
    return this.router.events.filter(evento => evento instanceof ActivationEnd)
    .filter((evento:ActivationEnd) => evento.snapshot.firstChild == null)
    .map((data:ActivationEnd) => data.snapshot.data);
  }
}

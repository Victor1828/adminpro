import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Componenetes
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        PagenotfoundComponent,
        SidebarComponent
    ],
    imports: [ CommonModule ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        PagenotfoundComponent,
        SidebarComponent
    ],
    providers: [],
})
export class SharedModule {}
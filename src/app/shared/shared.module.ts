import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//Componenetes
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';

//Pipes
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        PagenotfoundComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        PipesModule,
        RouterModule
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        PagenotfoundComponent,
        SidebarComponent
    ],
    providers: [],
})
export class SharedModule {}
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuard } from '../services/guards/login.guard';



const Pagesroutes: Routes = [
    { path: '', component: PagesComponent, canActivate: [LoginGuard],
    children: [
        { path: 'dashboard', component: DashboardComponent, data: {titulo: 'Dashboard'} },
        { path: 'progress', component: ProgressComponent, data: {titulo: 'Progress Bars'} },
        { path: 'graficas', component: GraficasComponent, data: {titulo: 'Gráficas'} },
        { path: 'promesas', component: PromesasComponent, data: {titulo: 'Promesas'} },
        { path: 'rxjs', component: RxjsComponent, data: {titulo: 'Observables'} },
        { path: 'account-settings', component: AccountSettingsComponent, data: {titulo: 'Configuración'} },
        { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(Pagesroutes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

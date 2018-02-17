import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

//Componentes
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficasComponent } from './graficas/graficas.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';



const Pagesroutes: Routes = [
    { path: '', component: PagesComponent, children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'graficas', component: GraficasComponent },
        { path: 'account-settings', component: AccountSettingsComponent },
        { path: '', pathMatch: 'full', redirectTo: '/dashboard' }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(Pagesroutes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

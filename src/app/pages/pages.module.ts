import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Componentes
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GraficasComponent } from './graficas/graficas.component';
import { GraficaDonasComponent } from '../components/grafica-donas/grafica-donas.component';
import { IncrementarComponent } from '../components/incrementar/incrementar.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';
import { PromesasComponent } from './promesas/promesas.component';
import { ProfileComponent } from './profile/profile.component';

//Modulos
import { SharedModule } from '../shared/shared.module';

//Ng2-charts
import { ChartsModule } from 'ng2-charts';

//Pipes
import { PipesModule } from '../pipes/pipes.module';

//Rutas
import { PagesRoutingModule } from './pages.routes';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations: [
        AccountSettingsComponent,
        DashboardComponent,
        GraficasComponent,
        GraficaDonasComponent,
        IncrementarComponent,
        PagesComponent,
        ProfileComponent,
        ProgressComponent,
        PromesasComponent,
        RxjsComponent
    ],
    imports: [
        ChartsModule,
        CommonModule,
        FormsModule,
        PagesRoutingModule,
        PipesModule,
        SharedModule
    ],
    exports: [
        DashboardComponent,
        GraficasComponent,
        ProgressComponent
    ],
    providers: [],
})
export class PagesModule {}
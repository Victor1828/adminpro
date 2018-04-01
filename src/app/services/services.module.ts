import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Servicios
import { SettingsService, SharedService, SidebarService, UsuarioService } from './services.index';
import { LoginGuard } from './guards/login.guard';
import { SubirArchivoService } from './subir-archivo/subir-archivo.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    LoginGuard,
    SettingsService,
    SharedService,
    SidebarService,
    SubirArchivoService,
    UsuarioService
  ]
})
export class ServiceModule { }

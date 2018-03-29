import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UsuarioService } from '../services.index';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.usuarioService.estaLogueado()) {
      console.log('Paso por el guard');
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log('Bloqueado por el guard');
      return false;
    }
  }
}

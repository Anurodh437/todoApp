import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate() {
    if (sessionStorage.getItem('auth-token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

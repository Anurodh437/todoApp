import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public router: Router, private auth: AuthService) {}
  canActivate() {
    if (localStorage.getItem('auth_token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

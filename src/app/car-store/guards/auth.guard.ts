import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/store/login']);
      return false;
    }
  }

  private isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}

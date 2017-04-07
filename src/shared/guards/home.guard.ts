import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// import { StorageService } from 'app-shared';

@Injectable() export class HomeGuard implements CanActivate {
  public canActivate(): boolean { return true; }
  //   constructor(private router: Router, private sessionStorage: StorageService) { }
  //   public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //     if (this.CheckIfTokenExpired()) {
  //       this.router.navigate(['/for-you']);
  //       return false;
  //     } else {
  //       this.sessionStorage.removeItem('id_token');
  //       this.sessionStorage.removeItem('exp');
  //       this.sessionStorage.removeItem('refresh_token');
  //       return true; // mozda staviti brisanje tokena iz sessiona.
  //     }

  //   }
  //   private CheckIfTokenExpired(): boolean {
  //     let token: string = this.sessionStorage.getItem('id_token');
  //     return token !== undefined && (this.sessionStorage.getItem('exp') > new Date().valueOf());
  //   }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

// import { AuthenticationService, StorageService } from 'app-shared';

/**
 * Decides if a route can be activated.
 */
@Injectable() export class AuthGuard implements CanActivate {
  constructor() { };
  public canActivate(): boolean { return true; }
  // constructor(public authenticationService: AuthenticationService, private router: Router, private sessionStorage: StorageService) {
  //   this.authenticationService.getUserInfo();
  //   console.log('autnenticaiont service called from AuthGuard component');
  // }

  // public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //   this.authenticationService.getUserInfo();
  //   if (this.CheckIfTokenExpired() && this.authenticationService.signinSubject.getValue()) {
  //     return true;
  //   }
  //   let url: string = state.url;
  //   this.authenticationService.redirectUrl = url;
  //   console.log('storing the url', this.authenticationService.redirectUrl);
  //   this.router.navigate(['/login']);
  //   return false;
  // }
  // private CheckIfTokenExpired(): boolean {
  //   let token: string = this.sessionStorage.getItem('id_token');
  //   return token !== undefined && (this.sessionStorage.getItem('exp') > new Date().valueOf());
  // }
}


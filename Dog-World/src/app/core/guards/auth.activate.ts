import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable()
export class AuthActivate implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> { 
    const { authenticationRequired, authenticationFailureRedirectUrl } = route.data;
    if (!this.authService.isAuthenticated) {
      alert('You have to login to see this page. You are redirected to login Page');
      
      this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
      return false;
  }else{

    return true;
  }
  }
}
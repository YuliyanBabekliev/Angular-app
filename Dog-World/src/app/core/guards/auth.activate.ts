import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';

@Injectable()
export class AuthActivate implements CanActivate {

  constructor(private router: Router, private tokenService: TokenStorageService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> { 
    if (!this.tokenService.getToken()) {
      alert('You have to login to see this page. You are redirected to login Page');
      
      this.router.navigate(["login"],{ queryParams: { retUrl: route.url} });
      return false;
  }else{
    return true;
  }
  }
}
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private authService: AuthService) { }


  isLogged():boolean{
    return this.authService.isAuthenticated;
  }

  logout(){
    this.authService.logout();
  }

}

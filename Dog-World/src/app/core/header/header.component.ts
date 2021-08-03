import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private usersService: UsersService) { }


  isLogged():boolean{
    return this.usersService.isLogged();
  }

}

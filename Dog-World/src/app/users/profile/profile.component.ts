import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { UsersService } from 'src/app/services/users/users.service';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = this.tokenStorage.getUser();

  constructor(private tokenStorage: TokenStorageService,
    private usersService: UsersService) { }

  ngOnInit(): void {
    console.log(this.user.dogs);
  }

  loadUser(){
    const id = this.user.id;
    this.usersService.getUserById(id).subscribe(user => this.user = user);
  }

}

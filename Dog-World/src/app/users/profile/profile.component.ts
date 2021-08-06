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

  user: IUser | undefined;

  constructor(private tokenStorage: TokenStorageService,
    private usersService: UsersService) { }

  ngOnInit(): void {
    this.user = this.tokenStorage.getUser();
  }

  loadUser(){
    const id = this.tokenStorage.getUser().id;
    this.usersService.getUserById(id).subscribe(user => this.user = user);
  }

}

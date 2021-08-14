import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { UsersService } from 'src/app/services/users/users.service';
import { IDog } from 'src/app/shared/interfaces/dog';
import { IUser } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user = this.tokenStorage.getUser();
  dogs!: IDog[];

  constructor(private tokenStorage: TokenStorageService,
    private usersService: UsersService,
    private authService: AuthService) { }

  ngOnInit(): void {
    const id = this.user.id;
    this.usersService.getUserById(id).subscribe(user => this.user = user);
    this.dogs = this.user.dogs;
    
  }

  loadUser(){
    const id = this.user.id;
    this.usersService.getUserById(id).subscribe(user => this.user = user);
  }
}

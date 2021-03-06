import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DogComponent } from '../dog/dog/dog.component';
import { AuthService } from '../services/auth/auth.service';
import { DogsService } from '../services/dogs/dogs.service';
import { TokenStorageService } from '../services/token-storage/token-storage.service';
import { UsersService } from '../services/users/users.service';
import { IDog } from '../shared/interfaces/dog';
import { RegisterComponent } from '../users/register/register.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  totalLength: any;
  page: number = 1;
  isLogged = this.authService.isAuthenticated;
  homePage: boolean | undefined;

  dogs!: IDog[];
  constructor(private dogService: DogsService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.dogService.getDogs().subscribe((data: IDog[]) => {
      this.dogs = data;
      this.totalLength = data.length;
      if(this.totalLength > data.length){
        window.location.reload();
      }
    });
  } 
}

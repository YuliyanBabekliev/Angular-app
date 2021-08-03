import { Component, OnInit } from '@angular/core';
import { DogComponent } from '../dog/dog/dog.component';
import { DogsService } from '../services/dogs/dogs.service';
import { UsersService } from '../services/users/users.service';
import { IDog } from '../shared/interfaces/dog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  totalLength: any;
  page: number = 1;

  dogs!: IDog[];
  constructor(private dogService: DogsService,
    private userService: UsersService,
    ) { }
  ngOnInit(): void {
    this.dogService.getDogs().subscribe((data: IDog[]) => {
      this.dogs = data;

      this.totalLength = data.length;
    });
  } 

  isLogged(): boolean{
    return this.userService.isLogged();
  }

  refresh(){
    window.location.reload();
  }
  
}

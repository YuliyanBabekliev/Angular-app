import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DogService } from 'src/app/services/dog/dog.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { IDog } from 'src/app/shared/interfaces/dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dog!: IDog;
  user = this.tokenStorage.getUser();


  constructor(private dogService: DogService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenStorage: TokenStorageService
    ) { 
      this.loadDog();
    }

  ngOnInit(): void {
  }

  loadDog(): void {
    const id = this.activatedRoute.snapshot.params.dogId;
    console.log(id);
    this.dogService.loadDog(id).subscribe(dog => this.dog = dog);
  }

  deleteDog(): void{
    if(confirm('Are you sure you want to delete this dog?')){
      const id = this.activatedRoute.snapshot.params.dogId;
      this.dogService.deleteDog(id).subscribe();
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      })
    }
  }

  addToFavourite(){
    this.user.dogs.push(this.dog.breed); 
    console.log(this.user);
  }
}

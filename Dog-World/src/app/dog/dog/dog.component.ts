import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DogService } from 'src/app/services/dog/dog.service';
import { IDog } from 'src/app/shared/interfaces/dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dog: IDog | undefined;


  constructor(private dogService: DogService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { 
      this.loadDog();
    }

  ngOnInit(): void {
  }

  loadDog(): void {
    this.dog = undefined;
    const id = this.activatedRoute.snapshot.params.dogId;
    console.log(id);
    this.dogService.loadDog(id).subscribe(dog => this.dog = dog);
  }

  deleteDog(): void{
    if(confirm('Are you sure you want to delete this dog?')){
      const id = this.activatedRoute.snapshot.params.dogId;
      this.dogService.deleteDog(id).subscribe();
      this.router.navigate(['/home']);
    }
  }
}

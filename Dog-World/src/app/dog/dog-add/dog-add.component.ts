import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {faDog} from '@fortawesome/free-solid-svg-icons';
import { DogService } from 'src/app/services/dog/dog.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { IDog } from 'src/app/shared/interfaces/dog';

@Component({
  selector: 'app-dog-add',
  templateUrl: './dog-add.component.html',
  styleUrls: ['./dog-add.component.css']
})
export class DogAddComponent {
  constructor(private dogService: DogService,
    private router: Router,
    private tokenStorage: TokenStorageService) { }

    faDog = faDog;

  createDog(form: NgForm): void{
    if(form.invalid){
      return;
    }
    form.value.username = this.tokenStorage.getUser().username;
    this.dogService.saveDog(form.value).subscribe({
      next: () => {
        console.log(form.value);
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}

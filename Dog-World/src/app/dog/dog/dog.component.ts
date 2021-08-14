import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentsService } from 'src/app/services/comments/comments.service';
import { DogService } from 'src/app/services/dog/dog.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { UsersService } from 'src/app/services/users/users.service';
import { IComment } from 'src/app/shared/interfaces/comment';
import { IDog } from 'src/app/shared/interfaces/dog';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dog!: IDog;
  
  user = this.tokenStorage.getUser();
  username = this.tokenStorage.getUser().username;

  comments!: IComment[];
  favouriteDogs!: IDog[];
  comment!: IComment;

  constructor(private dogService: DogService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private commentService: CommentsService,
    private userService: UsersService
    ) { 
      this.loadDog();
    }

  ngOnInit(): void {
    this.commentService.loadComments().subscribe((data: IComment[]) => {
      this.comments = data;
    });
  }

  loadDog(): void {
    const id = this.activatedRoute.snapshot.params.dogId;
    console.log(id);
    this.dogService.loadDog(id).subscribe(dog => this.dog = dog);
  }

  deleteDog(): void{
    if(confirm('Are you sure you want to delete this dog?')){
      const id = this.activatedRoute.snapshot.params.dogId;
      this.deleteComments(id);
      window.location.reload();
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
        this.deleteDogs(id);
      })
     }
  }

  deleteComments(id: number):void{
    for(let comment of this.comments){
      if(comment.dog.id == id){
        this.commentService.deleteComment(comment.id).subscribe();
      }
    }
  }

  deleteDogs(id: number): void{
    this.dogService.deleteDog(id).subscribe();
  }

  addComment(form: NgForm): void{
    form.value.user = this.user;
    form.value.dog = this.dog;
    console.log(form.value);
    this.commentService.saveComment(form.value).subscribe({
      next: () => {
        console.log(form.value);
        window.location.reload();
      },
      error: (err) => {
        console.log(err);
      }
    })
  }


}

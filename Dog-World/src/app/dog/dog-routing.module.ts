import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DogComponent } from './dog/dog.component';
import { DogAddComponent } from './dog-add/dog-add.component';


const routes: Routes = [
  {
    path: 'dog',
    children:[
      {
        path: ':dogId',
        component:DogComponent
      }
    ]
  },
  {
    path: 'dog-add',
    component: DogAddComponent
  }

];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class DogRoutingModule { }

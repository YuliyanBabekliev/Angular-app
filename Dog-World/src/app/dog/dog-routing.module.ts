import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DogComponent } from './dog/dog.component';
import { DogAddComponent } from './dog-add/dog-add.component';
import { AuthActivate } from '../core/guards/auth.activate';
import { NotFoundComponent } from '../not-found/not-found.component';


const routes: Routes = [
  {
    path: 'dog',
    children:[
      {
        path: ':dogId',
        component:DogComponent
      }
    ],
    canActivate: [AuthActivate],
  },
  {
    path: 'dog-add',
    component: DogAddComponent,
    canActivate: [AuthActivate],
  }

];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
  
})
export class DogRoutingModule { }

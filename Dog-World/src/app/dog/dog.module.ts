import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogComponent } from './dog/dog.component';
import { DogRoutingModule } from './dog-routing.module';
import { CoreModule } from '../core/core.module';
import { DogAddComponent } from './dog-add/dog-add.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DogComponent,
    DogAddComponent
  ],
  imports: [
    CommonModule,
    DogRoutingModule,
    CoreModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule
  ]
})
export class DogModule { }

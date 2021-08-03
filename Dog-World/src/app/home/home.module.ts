import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsersService } from '../services/users/users.service';





@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    NgxPaginationModule,
    CommonModule,
    CoreModule,
    RouterModule,
  ],
  exports: [
    HomeComponent
  ],
  providers:[
    UsersService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }

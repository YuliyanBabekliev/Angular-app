import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { UsersRoutingModule } from './users-routing.module';
import { CoreModule } from '../core/core.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CoreModule,
    FontAwesomeModule
  ],
  exports: [
    LoginComponent, 
    RegisterComponent,
    ProfileComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class UsersModule { }

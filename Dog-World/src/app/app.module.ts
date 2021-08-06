import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { UsersModule } from './users/users.module';
import { HomeModule } from './home/home.module';
import { DogModule } from './dog/dog.module';
import {HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './shared/interceptors/AuthInterceptor';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthActivate } from './core/guards/auth.activate';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UsersModule,
    HomeModule,
    DogModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders, AuthActivate],
  bootstrap: [AppComponent],
})
export class AppModule { }

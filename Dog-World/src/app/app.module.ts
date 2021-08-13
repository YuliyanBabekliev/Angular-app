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
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CoreModule,
    UsersModule,
    HomeModule,
    DogModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [authInterceptorProviders, AuthActivate],
  bootstrap: [AppComponent],
})
export class AppModule { }

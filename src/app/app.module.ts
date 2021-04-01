import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuNavbarComponent } from './views/menu-navbar/menu-navbar.component';
import { MainScreenComponent } from './views/main-screen/main-screen.component';
import { FormAddComponent } from './views/form-add/form-add.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuNavbarComponent,
    MainScreenComponent,
    FormAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing, 
    ReactiveFormsModule,
    HttpClientModule
    ],
  exports: [
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

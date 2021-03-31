import { routing } from './app.routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';

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
    ReactiveFormsModule
  ],
  exports: [
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

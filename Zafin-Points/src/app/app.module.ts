import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
    MainNavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

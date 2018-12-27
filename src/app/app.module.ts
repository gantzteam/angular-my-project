import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';

import { TodoService } from './services/todo.service';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    TodoService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

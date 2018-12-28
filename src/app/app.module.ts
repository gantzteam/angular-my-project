import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TodoService } from './services/todo.service';
import { HttpService } from './services/http.service';
import { MemoComponent } from './memo/memo.component';
import { Memo2Component } from './memo2/memo2.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    CardComponent,
    MemoComponent,
    Memo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TodoService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ListComponent } from './lists/lists.component';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from "./app-routing.module";

import { HttpModule } from "@angular/http";
import { TaskComponent } from './task/task.component';
import {ListService} from "./list.service";
import {TaskService} from "./task.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    ListComponent,
    TaskComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ ListService,TaskService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

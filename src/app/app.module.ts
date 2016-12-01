import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {HeroService} from "./hero.service";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
    // RouterModule.forRoot([
    //   {
    //     path: 'heroes',
    //     component: HeroesComponent
    //   }
    // ])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}

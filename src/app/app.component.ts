import {Component, OnInit} from '@angular/core';
import {Hero} from "./hero-detail/hero";
import {HEROES} from "./mock-heroes";
import {HeroService} from "./hero.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeroService]
})
export class AppComponent implements OnInit{
  constructor() { }

  ngOnInit() {
  }
}

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
  ngOnInit(): void {
    this.getHeroes();
  }
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  constructor(private heroService:HeroService){
  }
  getHeroes():void {
    this.heroService.getHeroesSlowly().then(heroes=>this.heroes=heroes);
  }
}

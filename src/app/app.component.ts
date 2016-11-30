import {Component} from '@angular/core';
import {Hero} from "./hero-detail/hero";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  heroes = HEROES;
  hero: Hero;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
const HEROES: Hero[] = [
  {id: 1, name: 'Mr. Vadimka'},
  {id: 11, name: 'Mr. Tomcat'},
  {id: 12, name: 'Mr. Herocu'},
  {id: 13, name: 'Ms. Java'},
  {id: 14, name: 'Ms. Spring'},
  {id: 15, name: 'Mr. Hibernate'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];

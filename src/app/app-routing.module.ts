import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {ListComponent} from "./lists/lists.component";
import {TaskComponent} from "./task/task.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";

const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'task',  component: TaskComponent },
  { path: 'list',     component: ListComponent },
  // { path: 'detail/:id', component: HeroDetailComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

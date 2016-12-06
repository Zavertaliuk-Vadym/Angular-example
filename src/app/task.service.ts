import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Task } from './task';

@Injectable()
export class TaskService {
  private heroesUrl = '/api/task/';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }


  getHeroes(): Promise<Task[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json() as Task[])
      .catch(this.handleError);

  }


  getHero(id: number): Promise<Task> {
    return this.getHeroes()
      .then(tasks => tasks.find(task => task.id === id));
  }

  update(task: Task): Promise<Task> {
    const url = `${this.heroesUrl}/${task.id}`;
    return this.http
      .put(url, task, {headers: this.headers})
      .toPromise()
      .then(() => task)
      .catch(this.handleError);
  }

  delete(idTask: number): Promise<void> {
    const url = `${this.heroesUrl}/${idTask}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}

import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { List } from './list';

@Injectable()
export class ListService {
  private listUrl = '/api/list/';
  private headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }


  getLists(): Promise<List[]> {
    return this.http.get(this.listUrl)
      .toPromise()
      .then(response => response.json() as List[])
      .catch(this.handleError);

  }

  getList(idList: number): Promise<List> {
    return this.getLists()
      .then(lists => lists.find(list => list.list_id === idList));
  }

  update(list: List): Promise<List> {
    const url = `${this.listUrl}/${list.list_id}`;
    return this.http
      .put(url, list, {headers: this.headers})
      .toPromise()
      .then(() => list)
      .catch(this.handleError);
  }

  create(listName: string): Promise<List> {
    return this.http
      .put(this.listUrl, JSON.stringify({listName: listName}), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  delete(idList: number): Promise<void> {
    const url = `${this.listUrl}/${idList}`;
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

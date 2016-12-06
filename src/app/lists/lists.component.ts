import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { List } from '../list';
import { ListService } from '../list.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'my-lists',
  templateUrl: 'lists.component.html',
  styleUrls: [ 'lists.component.css' ]
})
export class ListComponent implements OnInit {
  lists: List[];
  selectedList: List;

  constructor(
    private router: Router,
    private listService: ListService) { }

  getLists(): void {
    this.listService.getLists().then(lists => this.lists = lists);
  }

  ngOnInit(): void {
    this.getLists();
  }

  onSelect(list: List): void {
    this.selectedList = list;
  }

  add(listName: string): void {
    listName = listName.trim();
    if (!listName) { return; }
    this.listService.create(listName)
      .then(list => {
        this.lists.push(list);
        this.selectedList = null;
      });
  }

  delete(list: List): void {
    this.listService
      .delete(list.list_id)
      .then(() => {
        this.lists = this.lists.filter(h => h !== list);
        if (this.selectedList === list) { this.selectedList = null; }
      });
  }

}

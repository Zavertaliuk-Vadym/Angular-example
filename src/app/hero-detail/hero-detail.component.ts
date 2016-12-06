import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { List }         from '../list';
import { ListService }  from '../list.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  list: List;

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.listService.getList(+params['list_id']))
      .subscribe(list => this.list = list);
  }

  save(): void {
    this.listService.update(this.list)
      .then(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}

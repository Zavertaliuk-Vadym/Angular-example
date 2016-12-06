import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'my-tasks',
  templateUrl: 'task.component.html',
  styleUrls: [ 'task.component.css' ]
})
export class TaskComponent implements OnInit {
  tasks: Task[];
  selectedHero: Task;

  constructor(
    private router: Router,
    private taskService: TaskService) { }

  getHeroes(): void {
    this.taskService.getHeroes().then(tasks => this.tasks = tasks);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(task: Task): void {
    this.selectedHero = task;
  }


  delete(task: Task): void {
    this.taskService
      .delete(task.id)
      .then(() => {
        this.tasks = this.tasks.filter(h => h !== task);
        if (this.selectedHero === task) { this.selectedHero = null; }
      });
  }

}

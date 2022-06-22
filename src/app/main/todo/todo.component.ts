import { Component, OnInit } from '@angular/core';
import { CrudTaskService } from 'src/app/crud-task.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  
  public task: string;
  constructor(private crudService: CrudTaskService) {
    this.task = '';
  }

  ngOnInit(): void {}
  

  public addTask(): void {
    this.crudService.addTask(this.task);
    this.task = '';
  }
}

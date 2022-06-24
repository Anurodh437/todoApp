import { Component, OnInit } from '@angular/core';
import { CrudTaskService } from 'src/app/service/crud-task.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  tasks: any = [];

  constructor(
    public crudService: CrudTaskService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  taskForm = this.fb.group({
    task: ['', Validators.required],
  });

  ngOnInit(): void {}

  public addTask(taskForm: any): void {
    this.crudService.addTask(taskForm.value);
    this.tasks = this.crudService.getTasks();
    this.taskForm.reset();
  }

  // called(){
  //   console.log(this.tasks);
  // }

  redirectPage() {
    this.router.navigate(['/tasks']);
  }
}

import { Component, OnInit } from '@angular/core';
import { CrudTaskService } from 'src/app/main/service/crud-task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(
    public crudService: CrudTaskService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  selectedValue: any;
  priority = [{ name: 'Low' }, { name: 'Medium' }, { name: 'High' }];

  public createTaskForm!: FormGroup;
  currentDateTime: any;
  userInfo: any;

  ngOnInit(): void {
    this.userInfo = JSON.parse(sessionStorage.getItem('user-profile') || '{}');
    this.createTaskForm = this.fb.group({
      title: [''],
      content: [''],
      priority: [null],
    });
    this.currentDateTime =
      moment().format('DD-MM-YYYY') + ', ' + moment().format('LT');
  }

  createTask() {
    this.crudService
      .addTask(this.userInfo['token'], this.createTaskForm.value)
      .subscribe({
        next: (data: any) => {
          this.router.navigate(['/tasks']);
        },
        error: (err: any) => {
          alert(err.message);
        },
      });
  }
}

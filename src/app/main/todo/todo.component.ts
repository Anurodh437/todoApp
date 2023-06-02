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
  priority = [
    { id: 1, name: 'Low' },
    { id: 2, name: 'Medium' },
    { id: 3, name: 'High' },
  ];

  public createTaskForm!: FormGroup;
  currentDateTime: any;

  ngOnInit(): void {
    this.createTaskForm = this.fb.group({});
    this.currentDateTime =
      moment().format('DD-MM-YYYY') + ', ' + moment().format('LT');
  }
}

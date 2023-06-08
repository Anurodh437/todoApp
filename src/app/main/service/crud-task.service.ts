import { Injectable } from '@angular/core';
import { Task } from '../../task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import { Token } from '@angular/compiler';
import { GlobalsService } from './globals.service';

@Injectable({
  providedIn: 'root',
})
export class CrudTaskService {
  userInfo: any;
  constructor(
    private http: HttpClient,
    private spinner: NgxSpinnerService,
    public globals: GlobalsService
  ) {}

  ngOnInit(): void {}

  // method to get or fetch all tasks
  public getTasks(token: any) {
    this.globals.showLoader = true;
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.get('https://todotracker-cho3.onrender.com/api/tasks', {
      headers: header,
    });
  }

  // method to add task to localstorage and todolist
  public addTask(token: any, value: any) {
    this.spinner.show();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.post(
      'https://todotracker-cho3.onrender.com/api/tasks/create',
      value,
      {
        headers: header,
      }
    );
  }

  // method to remome data from localstorage as well as todolist
  public removeTask(data: number, Token: any) {
    this.spinner.show();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token}`,
    });
    return this.http.delete(
      'https://todotracker-cho3.onrender.com/api/tasks/' + `${data}`,
      {
        headers: header,
      }
    );
  }

  // method to edit the todoList
  public editTask(Token: any, taskForm: any, id: any) {
    this.spinner.show();
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token}`,
    });
    return this.http.put(
      'https://todotracker-cho3.onrender.com/api/tasks/' + `${id}`,
      taskForm,
      {
        headers: header,
      }
    );
  }
}

import { Injectable } from '@angular/core';
import { Task } from '../../task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class CrudTaskService {
  userInfo: any;
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {}

  // method to get or fetch all tasks
  public getTasks(token: any) {
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
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    return this.http.post('https://todotracker-cho3.onrender.com/api/tasks/create', value, {
      headers: header,
    });
  }

  // method to remome data from localstorage as well as todolist
  public removeTask(id: number): void {}

  // method to edit the todoList
  public editTask(id: number, taskForm: any) {}
}

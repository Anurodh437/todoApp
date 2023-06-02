import { Injectable } from '@angular/core';
import { Task } from '../../task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class CrudTaskService {
  constructor(private http: HttpClient, private spinner: NgxSpinnerService) {}

  // method to get or fetch all tasks
  public getTasks(value: any) {
    let header = new HttpHeaders();
    header.append('Authorization', `Bearer ${'545354355'}`);
    return this.http.get(
      'https://todotracker-cho3.onrender.com/api/users/register',
      {
        headers: header,
      }
    );
  }

  // method to add task to localstorage and todolist
  public addTask(texts: any): void {}

  // method to remome data from localstorage as well as todolist
  public removeTask(id: number): void {}

  // method to edit the todoList
  public editTask(id: number, taskForm: any) {}
}

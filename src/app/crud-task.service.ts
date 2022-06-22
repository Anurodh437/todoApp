import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class CrudTaskService {
  private tasks: Task[] = [];
  private id: number;

  constructor() {
    let tasks = this.getTasks();
    if (tasks.length == 0) {
      this.id = 0;
    } else {
      let ids = tasks[tasks.length - 1].id;
      this.id = ids + 1;
    }
  }

  public getTasks(): Task[] {
    let localItem = JSON.parse(localStorage.getItem('tasks')!);
    return localItem == null ? [] : localItem.tasks;
  }
  public addTask(text: string): void {
    let task = new Task(this.id, text);
    let tasks = this.getTasks();
    tasks.push(task);

    this.setLocalStorage(tasks);
    this.id++;
  }

  public removeTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id != id);
  }

  private setLocalStorage(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify({ tasks: tasks }));
  }
}

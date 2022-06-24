import { Injectable } from '@angular/core';
import { Task } from '../task';

@Injectable({
  providedIn: 'root',
})
export class CrudTaskService {
  private tasks: Task[] = [];
  public id: number = 0;
  public editMode: boolean;
  public editUserId: any;

  constructor() {
    this.editMode = false;
  }
  // setter method for editMpde
  public set setEditMode(val: boolean) {
    this.editMode = val;
  }
  //getter method for editMode
  public get getEditMode(): boolean {
    return this.editMode;
  }

  // method to get or fetch all tasks
  public getTasks(): any {
    let localItem = JSON.parse(localStorage.getItem('tasks')!);
    return localItem == null ? [] : localItem.tasks;
  }

  // method to add task to localstorage and todolist
  public addTask(texts: any): void {
    if (this.editMode) {
      console.log(this.editUserId);
      this.tasks[this.editUserId].task = texts.task;
      this.setLocalStorage(this.tasks);
      // console.log(texts.task);
      this.setEditMode = false;
    } else {
      // console.log(texts.task);
      let tosk = new Task(this.id, texts.task);
      this.tasks.push(tosk);
      this.setLocalStorage(this.tasks);
      // console.log(this.tasks);
      this.id++;
    }
  }

  // method to remome data from localstorage as well as todolist
  public removeTask(id: number): void {
    // console.log(id);
    // console.log('delete called');
    const indexOfObject = this.tasks.findIndex((obj) => {
      return obj.id === id;
    });
    // console.log(indexOfObject);

    if (indexOfObject !== -1) {
      this.tasks.splice(indexOfObject, 1);
    }
    // console.log(this.tasks);
    this.setLocalStorage(this.tasks);
  }

  // method to set data to localstorage
  private setLocalStorage(tasks: Task[]): void {
    localStorage.setItem('tasks', JSON.stringify({ tasks: tasks }));
  }

  // method to edit the todoList
  public editTask(id: number, taskForm: any) {
    // this.editMode = true;
    console.log(this.editMode);
    
    this.setEditMode = true;
    this.editUserId = id;
    // console.log(this.tasks[id].task);
    taskForm.setValue({
      task: this.tasks[id]?.task,
    });
  }
}

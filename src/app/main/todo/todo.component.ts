import { Component, OnInit } from '@angular/core';
import { CrudTaskService } from 'src/app/main/service/crud-task.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { HotToastService } from '@ngneat/hot-toast';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { GlobalsService } from '../service/globals.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(
    public crudService: CrudTaskService,
    private fb: FormBuilder,
    private router: Router,
    private toast: HotToastService,
    private spinner: NgxSpinnerService,
    public globals: GlobalsService
  ) {}
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
    if (this.globals.editCheck == true) {
      this.setFieldValue();
    }
  }

  setFieldValue() {
    this.createTaskForm.setValue({
      title: this.globals.editdata.title,
      content: this.globals.editdata.content,
      priority: this.globals.editdata.priority,
    });
  }

  updateTask() {
    this.crudService
      .editTask(this.userInfo['token'], this.createTaskForm.value,this.globals.editdata._id)
      .subscribe({
        next: (data: any) => {
          this.spinner.hide();
          this.router.navigate(['/tasks']);
          this.toast.success("Task Updated Successfully!")
        },
        error:(err:any)=>{
          this.toast.error("Something Went Wrong!")
        }
      });
  }

  createTask() {
    this.crudService
      .addTask(this.userInfo['token'], this.createTaskForm.value)
      .subscribe({
        next: (data: any) => {
          this.router.navigate(['/tasks']);
          this.toast.success('Task Created Successfully');
        },
        error: (err: any) => {
          this.toast.error(err.message);
          this.spinner.hide();
        },
      });
  }
}

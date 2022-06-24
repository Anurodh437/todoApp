import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MainRoutingModule } from './main-routing.module';
import { TodoComponent } from './todo/todo.component';
import { ViewTaskComponent } from './view-task/view-task.component';

@NgModule({
  declarations: [
    TodoComponent,
    ViewTaskComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule { }

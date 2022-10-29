import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastModule, HotToastService } from '@ngneat/hot-toast';
import { CrudTaskService } from 'src/app/service/crud-task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss'],
})
export class ViewTaskComponent implements OnInit {
  constructor(public crudService: CrudTaskService,private router:Router,private toast:HotToastService) {}

  ngOnInit(): void {}

  back(){
    this.router.navigate(['/addTask']);
  }

  opens(){
    this.toast.show("jdhfjdbfhj")
  }
}

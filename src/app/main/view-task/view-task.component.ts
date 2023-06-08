import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastModule, HotToastService } from '@ngneat/hot-toast';
import { CrudTaskService } from 'src/app/main/service/crud-task.service';
import { GlobalsService } from '../service/globals.service';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss'],
})
export class ViewTaskComponent implements OnInit {
  inputValue: any;
  userInfo: any;
  p: number = 1;
  constructor(
    public crudService: CrudTaskService,
    private router: Router,
    private toast: HotToastService,
    public globals: GlobalsService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.userInfo = JSON.parse(sessionStorage.getItem('user-profile') || '{}');
    this.fetchDetails();
  }

  fetchDetails() {
    this.crudService.getTasks(this.userInfo['token']).subscribe({
      next: (data: any) => {
        this.globals.taskArray = data;
        this.globals.filteredData = this.globals.taskArray;
        this.spinner.hide();
        this.globals.showLoader = false;
      },
    });
  }
  editTask(i:any) {
    this.toast.show('jdhfjdbfhj');
    console.log("dubey",i._id);
  }

  deleteTask() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    
  }


  navigateToUrl() {
    this.router.navigate(['/addTask']);
  }
}

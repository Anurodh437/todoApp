import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastModule, HotToastService } from '@ngneat/hot-toast';
import { CrudTaskService } from 'src/app/main/service/crud-task.service';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss'],
})
export class ViewTaskComponent implements OnInit {
  inputValue: any;
  constructor(
    public crudService: CrudTaskService,
    private router: Router,
    private toast: HotToastService
  ) {}

  ngOnInit(): void {}

  opens() {
    this.toast.show('jdhfjdbfhj');
  }
  addItem(e: any) {
    console.log('anurodh', e);
  }
  navigateToUrl() {
    this.router.navigate(['/addTask']);
  }
}

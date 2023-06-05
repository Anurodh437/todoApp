import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcometitle',
  templateUrl: './welcometitle.component.html',
  styleUrls: ['./welcometitle.component.scss'],
})
export class WelcometitleComponent implements OnInit {
  userInfo: any;
  constructor() {}

  ngOnInit(): void {
    this.userInfo = JSON.parse(sessionStorage.getItem('user-profile') || '{}');
  }
}

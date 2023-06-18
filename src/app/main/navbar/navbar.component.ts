import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalsService } from '../service/globals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public globals: GlobalsService, private router: Router) {}
  userInfo: any;
  ngOnInit(): void {
    this.userInfo = JSON.parse(sessionStorage.getItem('user-profile') || '{}');
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}

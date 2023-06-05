import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalsService } from '../service/globals.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public globals: GlobalsService) {}

  ngOnInit(): void {}
  logout() {
    console.log('logged out');
  }
}

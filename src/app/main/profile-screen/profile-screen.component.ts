import { Component, OnInit } from '@angular/core';
import { GlobalsService } from '../service/globals.service';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.scss'],
})
export class ProfileScreenComponent implements OnInit {
  constructor(public global: GlobalsService) {}

  ngOnInit(): void {}
}

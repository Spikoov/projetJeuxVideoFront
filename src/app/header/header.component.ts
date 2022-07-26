import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  user: User
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user"))
  }

}

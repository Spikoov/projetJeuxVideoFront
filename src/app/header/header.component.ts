import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  user: User
  constructor(private route: Router) { }

  ngOnInit(): void {
    console.log("coucou");
    
    this.user = JSON.parse(sessionStorage.getItem("user"))
  }

  disconnect() {
    sessionStorage.removeItem("user")
    this.user = null
    sessionStorage.removeItem("order")
    this.route.navigate(['/'])
  }
}

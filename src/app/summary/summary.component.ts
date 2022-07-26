import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from '../order';
import { User } from '../user';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.sass']
})
export class SummaryComponent implements OnInit {

  user: User = JSON.parse(sessionStorage.getItem("user"))
  order: Order 
  constructor(private route: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("order") == null) {
      this.route.navigate(['/order'])
    } else {
      this.order = JSON.parse(sessionStorage.getItem("order"))
    }
  }

}

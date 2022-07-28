import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  user: User = new User()

  adress: string
  zip: number
  city: string

  constructor(private srv: UserService, private route : Router) { }

  ngOnInit(): void {
  }

  signup() {
    document.getElementById('usernameAlreadyExists').hidden = true
    this.user.adresse = this.adress + " " + this.zip + " " + this.city
    this.srv.create(this.user, () => {
      document.getElementById('usernameAlreadyExists').hidden = false
    })
  }

}

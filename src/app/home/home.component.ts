import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {    
    let user: User = new User()
    user.nom = "toto"
    user.prenom = "tyty"
    user.username = "tyto"
    user.password = "password"
    user.adresse = "toto's adresse"
    user.isAdmin = false
    user.isBanned = false

    sessionStorage.setItem("user", JSON.stringify(user))
  }

}

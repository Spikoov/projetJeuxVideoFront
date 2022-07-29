import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass']
})
export class ProfileComponent implements OnInit {

  user: User
  constructor(private aRoute: ActivatedRoute, private srv: UserService, private route: Router) { }

  ngOnInit(): void {
    this.aRoute.params.subscribe(params =>{
      this.srv.findByid(params['username'], (reponse) => {
        this.user = reponse
      })
    })
  }

}

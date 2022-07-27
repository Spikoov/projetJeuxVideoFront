import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.sass']
})
export class AdministrationComponent implements OnInit {

  users : any;

  constructor(private srv : UserService, private http : HttpClient) { }

  ngOnInit(): void {

    this.srv.findAll((response) => {
      this.users = response
    })
  }

  makeGod(u : User)
  {
    if(u.isAdmin == false || u.isAdmin == null)
    {
      u.isAdmin = true
      this.srv.update(u, () => {
        this.srv.findAll((response) => {
          this.users = response
        })
      });
      //console.log(u);
    }
    else
    {
      u.isAdmin = false;
      this.srv.update(u, () => {
        this.srv.findAll((response) => {
          this.users = response
        })
      });
      //console.log(u);
    }
  }

  /*makeGod(u : User, isChecked : boolean)
  {
    u.isAdmin = false;
  }

  makeDog(u)
  {
    u.isBanned = false;
  }*/

}

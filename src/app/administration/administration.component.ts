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

    this.http.get("http://localhost:8080/jeuxvideo/users").subscribe(
reponse=>{
  this.users = reponse

},

err => {
 
  console.log(err);
}

    );
  }

  makeGod(u : User)
  {
    if(u.isAdmin == false || u.isAdmin == null)
    {
      u.isAdmin = true
      sessionStorage.setItem("user", JSON.stringify(u));
      this.srv.update(u);
      //console.log(u);
    }
    else
    {
      u.isAdmin = false;
      sessionStorage.setItem("user", JSON.stringify(u));
      this.srv.update(u);
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

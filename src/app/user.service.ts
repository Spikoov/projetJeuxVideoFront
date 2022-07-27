import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private route : Router) { }

  private add(user: User): void {
    const body = JSON.stringify(user)

    this.http.post("http://localhost:8080/jeuxvideo/users", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).
      subscribe(response => {

        console.log("Tu es inscrit, félicitations !");
        sessionStorage.setItem("user", JSON.stringify(user))
        this.route.navigate(["/"])
       
      },

        err => {
          console.log("Echec de création")
        });
  }

  create (user : User) : void {

    let url:string="http://localhost:8080/jeuxvideo/users/user/" + user.username;

    this.http.get<User>(url).subscribe(
      reponse=>{
                  console.log("Utilisateur déjà inscrit")
              },

      err=>{
              this.add(user)
            }

                );

  }

  find(user : User) {
    
    //let u : User = new User();
    console.log(user)
    let url:string="http://localhost:8080/jeuxvideo/users/" + user.username + "/" + user.password;

    this.http.get<User>(url).subscribe(
      reponse=>{
                  console.log(reponse)
                  sessionStorage.setItem("userFind",JSON.stringify(reponse));
              },

      err=>{
              console.log("Utilisateur inconnu");
            }

                );
  }
}

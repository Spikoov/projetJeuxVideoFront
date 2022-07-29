import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { bindCallback } from 'rxjs';
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
        //this.route.navigate(["/"])
        window.location.href = '/'
      },

        err => {
          console.log("Echec de création")
        });
  }

  findAll(callback) {
    this.http.get("http://localhost:8080/jeuxvideo/users").subscribe(
      reponse=>{
        callback(reponse)
      },

      err => {
      
        console.log(err);
      }

    );
  }

  create (user : User, usernameAlreadyExists) : void {

    let url:string="http://localhost:8080/jeuxvideo/users/user/" + user.username;

    this.http.get<User>(url).subscribe(
      reponse=>{
                  console.log("Utilisateur déjà inscrit")
                  usernameAlreadyExists()
              },

      err=>{
              this.add(user)
            }

                );

  }

  find(username : String, password : String, banCallback, unknownUser) {
    
    //let u : User = new User();
    //console.log(user)
    let url:string="http://localhost:8080/jeuxvideo/users/" + username + "/" + password;

    this.http.get<User>(url).subscribe(
      reponse=>{
                  if(reponse == null || reponse.username == "" || reponse.password == "")
                  {
                    //this.route.navigate(["/login"])
                    unknownUser()
                    
                  }
                  else
                  {
                    if (!reponse.isBanned) {
                      sessionStorage.setItem("user",JSON.stringify(reponse));
                      //this.route.navigate(["/"])
                      window.location.href = '/'
                    } else {
                      banCallback()
                    }
                  }
              },

      err=>{
              console.log("Utilisateur inconnu");
              
            }

                );


                
  }


  findByid(username : string, callback) {
    
    let url:string="http://localhost:8080/jeuxvideo/users/user/" + username;

    this.http.get<User>(url).subscribe(
      reponse=>{
                    console.log(reponse)
                    callback(reponse)
              },

      err=>{
              console.log("Utilisateur inconnu");
            }

                );
  }

  update(user : User, callback)
  {
    const body = JSON.stringify(user);

    console.log(user)

    this.http.put("http://localhost:8080/jeuxvideo/users/", body,
    {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {

      //this.findByid(user);
      callback()

    },

      err => {

      });
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Commande } from './commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  create(order: Commande) {
    const body = JSON.stringify(order)    

    this.http.post("http://localhost:8080/jeuxvideo/commandes", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(
      response => {
        console.log("Ajouté") 
        sessionStorage.removeItem("order")
      },
      err => {
        console.log("Erreur")
      }
    )
  }
}

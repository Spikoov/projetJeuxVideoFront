import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, observable } from 'rxjs';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor(private http: HttpClient) { }

  findAll(callback) { 
    this.http.get<Array<Article>>("http://localhost:8080/jeuxvideo/articles").subscribe(
      response=>{
        sessionStorage.setItem("articles", JSON.stringify(response)) 
        callback()
      },
      err=>(
        console.log('Error')          
      )
    )    
  }

  findById(id: string, callback) {
    this.http.get<Array<Article>>("http://localhost:8080/jeuxvideo/articles/" + id).subscribe(
      response=>{
        callback(response)
      },
      err=>(
        console.log('Error')          
      )
    )   
  }

  create(article: Article, callback) {
    const body = JSON.stringify(article)
    this.http.post("http://localhost:8080/jeuxvideo/articles", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(
      response => {
        console.log("Article ajouté"); 
        callback()
      },
      err => {
        console.log("Erreur");        
      }
    )
  }

  update(article: Article, callback) {
    const body = JSON.stringify(article)
    console.log(body);
    
    this.http.put("http://localhost:8080/jeuxvideo/articles", body, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(
      response => {
        console.log("Article mis à jour");
        callback()  
      },
      err => {
        console.log("erreur");
        
      }
    )
  }

  delete(id: number, callback) {
    this.http.delete("http://localhost:8080/jeuxvideo/articles/" + id).subscribe(
      response => {
        console.log("article supprimé");
        callback()
      },
      err => {
        console.log("Erreur");        
      }
    )
  }
}

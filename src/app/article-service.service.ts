import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root'
})
export class ArticleServiceService {

  constructor(private http: HttpClient) { }

  findAll() : void {
    if (sessionStorage.getItem("articles") == null) {      
      this.http.get<Array<Article>>("http://localhost:8080/jeuxvideo/articles").subscribe(
        response=>(
          sessionStorage.setItem("articles", JSON.stringify(response))
        ),
        err=>(
          console.log('Error')          
        )
      ) 
    }
  }
}

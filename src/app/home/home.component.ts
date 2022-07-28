import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleServiceService } from '../article-service.service';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  articles: Array<Article>
  frontArticle: Article
  carouselArticles: Array<Article>
  otherArticle: Article
  constructor(private srv: ArticleServiceService) { }

  ngOnInit(): void {    
    this.srv.findAll(() => {
      this.articles = JSON.parse(sessionStorage.getItem("articles"))
      
      this.frontArticle = this.articles[8]
      this.carouselArticles = [this.articles[0], this.articles[6], this.articles[7]]
      this.otherArticle = this.articles[1]
    })
  }

}

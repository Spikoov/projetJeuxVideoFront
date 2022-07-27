import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleServiceService } from '../article-service.service';

@Component({
  selector: 'app-manage-articles',
  templateUrl: './manage-articles.component.html',
  styleUrls: ['./manage-articles.component.sass']
})
export class ManageArticlesComponent implements OnInit {

  articles: Array<Article>
  currentArticle: Article
  constructor(private srv: ArticleServiceService) { }

  ngOnInit(): void {
    this.getArticles()
  }

  private getArticles() {
    this.srv.findAll(() => {
      this.articles = JSON.parse(sessionStorage.getItem("articles"))     
    })
    
  }

  delete() {
    this.srv.delete(this.currentArticle.id, () => {
        this.getArticles()
    })
  }

}

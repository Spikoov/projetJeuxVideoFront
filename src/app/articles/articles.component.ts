import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ArticleServiceService } from '../article-service.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.sass']
})
export class ArticlesComponent implements OnInit {

  articles: Array<Article>
  constructor(private srv : ArticleServiceService) { }

  ngOnInit(): void {
    this.srv.findAll()
    this.articles = JSON.parse(sessionStorage.getItem("articles"))
  }

}

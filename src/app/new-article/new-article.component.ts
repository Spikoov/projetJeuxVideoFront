import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleServiceService } from '../article-service.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.sass']
})
export class NewArticleComponent implements OnInit {

  newId: number = JSON.parse(sessionStorage.getItem('articles')).length
  article: Article = new Article()
  constructor(private srv: ArticleServiceService, private route: Router) { }

  ngOnInit(): void {
    this.article.id = this.newId
  }

  add() {
    this.srv.create(this.article, () => {
      this.route.navigate(['/manage/articles'])
    })
  }
}

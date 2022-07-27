import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleServiceService } from '../article-service.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.sass']
})
export class UpdateArticleComponent implements OnInit {

  article: Article
  constructor(private srv: ArticleServiceService, private aRoute: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    let currentId: string
    this.aRoute.params.subscribe(params => {currentId = params['id']})
    
    this.srv.findById(currentId, (response) => {
      this.article = response      
    })
  }

  update() {
    this.srv.update(this.article, () => {
      this.route.navigate(['/manage/articles'])
    })
  }

}

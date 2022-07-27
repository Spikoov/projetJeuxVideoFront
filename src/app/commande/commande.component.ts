import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from '../article';
import { ArticleServiceService } from '../article-service.service';
import { Line, Order } from '../order';
import { User } from '../user';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.sass']
})
export class CommandeComponent implements OnInit {

  articles: Array<Article>

  currentArticlePrice: number
  currentArticleId: number = 0
  currentQuantity: number = 1

  order: Order

  constructor(private srv: ArticleServiceService, private route: Router) { }

  ngOnInit(): void {
    let user = new User()
    user.username = "toto"
    sessionStorage.setItem("user", JSON.stringify(user))

    if (sessionStorage.getItem("user") == null) {
      this.route.navigate(['/login'])
      return
    }

    this.srv.findAll()
    
    this.articles = JSON.parse(sessionStorage.getItem('articles'))
    this.updatePrice()
    this.order = JSON.parse(sessionStorage.getItem('order'))
  }

  updatePrice() {
    this.currentArticlePrice = this.articles[this.currentArticleId].prix    
  }

  add() {
    if (this.order == null) {
      this.order = new Order()
    }

    this.addLine()

    this.calculatePriceAndSave()
  }

  private addLine() {
    for (const line of this.order.lines) {
      if (line.article.id === this.currentArticleId) {
        line.quantity += this.currentQuantity
        line.price = line.article.prix * line.quantity
        return
      }
    }
    
    let line = new Line(this.articles[this.currentArticleId], this.currentQuantity)
    this.order.lines.push(line)
  }

  removeFromCart(articleId: number) {
    console.log(articleId);
    
    let id = this.order.lines.findIndex(line => line.article.id === articleId)

    this.order.lines.splice(id, 1)
    this.calculatePriceAndSave()
  }

  private calculatePriceAndSave() {
    this.order.price = 0
    this.order.lines.forEach(line => {
      this.order.price += line.price
    })
    this.order.price = parseFloat(this.order.price.toFixed(2))
    
    sessionStorage.setItem("order", JSON.stringify(this.order))
  }
}

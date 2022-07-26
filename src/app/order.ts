import { Article } from "./article"

export class Order {
  lines: Array<Line>
  price: number

  constructor() {
    this.lines = new Array<Line>()
    this.price = 0
  }
}

export class Line {
  article: Article
  quantity: number
  price: number

  constructor(article: Article, quantity: number) {
    this.article = article
    this.quantity = quantity
    this.price = this.article.prix * this.quantity
  }
}
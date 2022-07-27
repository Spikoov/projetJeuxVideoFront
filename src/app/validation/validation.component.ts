import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from '../commande';
import { CommandeService } from '../commande.service';
import { Line, Order } from '../order';
import { User } from '../user';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.sass']
})
export class ValidationComponent implements OnInit {

  user: User = JSON.parse(sessionStorage.getItem("user"))
  constructor(private srv: CommandeService, private route: Router) { }

  ngOnInit(): void {
    if (sessionStorage.getItem("order") == null) {
      this.route.navigate(['/order'])
    }
    let order: Order = JSON.parse(sessionStorage.getItem("order"))

    let commande = new Commande()
    commande.date = new Date()
    commande.idClient = this.user
    commande.prixTotal = order.price
    commande.infos = this.generateInfos(order.lines)

    this.srv.create(commande)
  }

  private generateInfos(lines: Array<Line>): string {
    let str = ''
    for (const line of lines) {
      str += line.article.id + " - " + line.quantity + ";"
    }
    return str
  }

}

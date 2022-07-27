import { User } from "./user"

export class Commande {
  id: number
  date: Date
  idClient: User
  infos: string
  prixTotal: number
}
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { ArticlesComponent } from './articles/articles.component';
import { CommandeComponent } from './commande/commande.component';
import { ConnectionComponent } from './connection/connection.component';
import { HomeComponent } from './home/home.component';
import { ManageArticlesComponent } from './manage-articles/manage-articles.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { SignupComponent } from './signup/signup.component';
import { SummaryComponent } from './summary/summary.component';
import { UpdateArticleComponent } from './update-article/update-article.component';
import { ValidationComponent } from './validation/validation.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'articles', component: ArticlesComponent},
  {path: 'login', component: ConnectionComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'order', component: CommandeComponent},
  {path: 'order/summary', component: SummaryComponent},
  {path: 'order/validation', component: ValidationComponent},
  {path: 'manage/articles', component: ManageArticlesComponent},
  {path: 'manage/articles/new', component: NewArticleComponent},
  {path: 'manage/article/:id', component: UpdateArticleComponent},
  {path: 'administration', component: AdministrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

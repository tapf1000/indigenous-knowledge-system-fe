import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContributeComponent } from './contribute/contribute.component';
import { CategoriesComponent } from './categories/categories.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'contribute', component: ContributeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'knowledge-base', component: KnowledgeBaseComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

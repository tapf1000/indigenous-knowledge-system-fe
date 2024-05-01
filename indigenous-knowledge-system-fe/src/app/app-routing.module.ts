import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContributeComponent } from './contribute/contribute.component';
import { CategoriesComponent } from './categories/categories.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'contribute', component: ContributeComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'knowledge-base', component: KnowledgeBaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

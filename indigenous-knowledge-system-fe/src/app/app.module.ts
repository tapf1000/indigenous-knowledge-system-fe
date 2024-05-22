import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ContributeComponent } from './contribute/contribute.component';
import { CategoriesComponent } from './categories/categories.component';
import { KnowledgeBaseComponent } from './knowledge-base/knowledge-base.component';
import { KnowledgeSystemComponent } from './knowledge-system/knowledge-system.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    ContributeComponent,
    CategoriesComponent,
    KnowledgeBaseComponent,
    KnowledgeSystemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Category} from '../../util/util';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Category[]>('http://localhost:8080/api/v1/categories').subscribe(resp => {
      this.categories = resp;
    });
  }

}

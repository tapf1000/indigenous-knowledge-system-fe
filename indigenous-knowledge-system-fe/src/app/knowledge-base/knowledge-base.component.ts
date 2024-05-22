import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Category, CategoryValue, CharacteristicEvaluation} from '../../util/util';


@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.css']
})
export class KnowledgeBaseComponent implements OnInit {
  
  categoryValues: CategoryValue[] = [];
  characteristicEvaluation: CharacteristicEvaluation | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Category[]>('../../assets/category-data.json').subscribe(data => {
      this.categoryValues = data[0].categoryValues;
      this.characteristicEvaluation = this.categoryValues[0].characteristicEvaluation;
    });
  }

}

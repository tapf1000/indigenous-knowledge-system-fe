import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {CategoryValue, CharacteristicEvaluation} from '../../util/util';
import { ActivatedRoute } from '@angular/router';
import { KnowledgeSystemComponent } from '../knowledge-system/knowledge-system.component';


@Component({
  selector: 'app-knowledge-base',
  templateUrl: './knowledge-base.component.html',
  styleUrls: ['./knowledge-base.component.css']
})
export class KnowledgeBaseComponent implements OnInit {
  
  categoryValues: CategoryValue[] = [];
  characteristicEvaluation: CharacteristicEvaluation | undefined;
  @ViewChild(KnowledgeSystemComponent) knowledgeSystemComponent!: KnowledgeSystemComponent;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(param => {
      const category = param['catName'];
      if (category) 
        this.retrieveSingleDataItem(category);
      else 
        this.retrieveAllData();      
    });
  }

  retrieveAllData(){
    this.http.get<CategoryValue[]>(`http://localhost:8080/api/v1/cat-vals`).subscribe(catVals =>{
      this.categoryValues = catVals; 
    });
  }

  retrieveSingleDataItem(categoryName: string){
    this.http.get<CategoryValue[]>(`http://localhost:8080/api/v1/cat-val/${categoryName}`).subscribe(categoryValue =>{
      this.categoryValues = categoryValue; 
    });
  }

  showKnowledgeSystem(catVal: string){
    this.knowledgeSystemComponent.retrieveCharacteristicEval(catVal);
  }

}

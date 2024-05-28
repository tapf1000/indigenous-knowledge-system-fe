import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Category, CategoryValue, CharacteristicEvaluation} from '../../util/util';

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit{

  categoryNames: string[] = [];
  category: string = "";
  categoryItem: string = "";
  characteristic: string = "";
  evaluation: string = "";

  categories: Category[] = [];

  characteristicEvaluation?: CharacteristicEvaluation;
  categoryValue?: CategoryValue;
  savedCategory?: Category;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Category[]>('http://localhost:8080/api/v1/categories').subscribe(resp => {
      this.categories = resp;
      this.categoryNames = this.categories.map(c => c.catName);
    });
  }

  submitCategory(): void{
    this.characteristicEvaluation =  {
      "characteristic": this.characteristic,
      "evaluation": this.evaluation
    };
    this.categoryValue = {
      "value": this.categoryItem,
      "characteristicEvaluation": this.characteristicEvaluation
    };
    this.savedCategory = {
      "catName": this.category,
      "categoryValues": [this.categoryValue]
    }
    console.log(`submitting request ... ${JSON.stringify(this.savedCategory)}`)
    this.submitRequest(this.savedCategory);
  }

  disabled(){
    if(this.category && this.categoryItem && this.characteristic && this.evaluation){
      return (
        this.isEmpty(this.category) && 
        this.isEmpty(this.categoryItem) && 
        this.isEmpty(this.characteristic) && 
        this.isEmpty(this.evaluation)
      )
    }
    return false;
  }

  isEmpty(value: string | null | undefined): boolean {
    return (value == null || value.trim().length === 0);
  }

  submitRequest(category: Category): void{
    this.http.post<Category>("http://localhost:8080/api/v1/add-category", this.savedCategory).subscribe(
      (response) => {
        console.log('Request successfully submitted', response);
        // show dialog here
      },
      (error) => {
        console.error('Error making request', error);
        // show dialog here
      }
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Category, CategoryValue, CharacteristicEvaluation} from '../../util/util';
import { NotificationService } from '../notification.service';

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

  constructor(private http: HttpClient, private notification: NotificationService) {}

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
    this.evaluation = "";
    this.characteristic = "";
    this.categoryItem = "";
    this.category = "";
    this.submitRequest(this.savedCategory);
  }

  disabled(){
    if(this.category && this.categoryItem && this.characteristic && this.evaluation
      && this.evaluation != "" && this.characteristic != "" && this.categoryItem != "" && this.category != ""
    ){
      return false;
    }
    return true;
  }

  isEmpty(value: string | null | undefined): boolean {
    return (value == null || value.trim().length === 0);
  }

  submitRequest(category: Category): void{
    this.http.post<Category>("http://localhost:8080/api/v1/add-category", this.savedCategory).subscribe(
      (response) => {
        this.notification.showSuccess(`Successfully saved new ${response.catName} record`);
      },
      (error) => {
        this.notification.showError(`Error saving response ${error.message}`)
      }
    );
  }
}

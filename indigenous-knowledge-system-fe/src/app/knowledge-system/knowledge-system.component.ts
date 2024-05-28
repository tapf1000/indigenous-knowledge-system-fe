import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CharacteristicEvaluation } from 'src/util/util';

@Component({
  selector: 'app-knowledge-system',
  templateUrl: './knowledge-system.component.html',
  styleUrls: ['./knowledge-system.component.css']
})
export class KnowledgeSystemComponent implements OnInit {

  characteristicEvaluation!: CharacteristicEvaluation

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    
  }

  public retrieveCharacteristicEval(catVal: string){
    this.http.get<CharacteristicEvaluation>(`http://localhost:8080/api/v1/char-eval/${catVal}`).subscribe(data => {
      this.characteristicEvaluation = data
    });

  }
}

export interface CharacteristicEvaluation {
    characteristic: string;
    evaluation: string;
  }
  
  export interface CategoryValue {
    value: string;
    characteristicEvaluation: CharacteristicEvaluation;
  }
  
  export interface Category {
    catName: string;
    categoryValues: CategoryValue[];
  }
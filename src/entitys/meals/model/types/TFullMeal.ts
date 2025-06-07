import type { TCategory } from "./TCategory.type";

type Index = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 
  '10' | '11' | '12' | '13' | '14' | '15' | '16' | '17' | '18' | '19' | '20';

type IngredientKeys = `strIngredient${Index}`;
type MeasureKeys = `strMeasure${Index}`;

type RecipeIngredients = {
  [K in IngredientKeys]: string | null;
} & {
  [K in MeasureKeys]: string | null;
};

export type TFullMeal = {
    strYoutube : string,
    strInstructions : string,
    strMeal : string,
    strSource : string,
    strMealThumb : string,
    
    
} & RecipeIngredients & TCategory
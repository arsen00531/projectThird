import axios from "axios";
import type { TCategory } from "../model/types/TCategory.type";
import type { TFullMeal } from "../model/types/TFullMeal";
import { type TShortMeal } from "../model/types/TShortMeal.type";


class Meal{
    baseUrl:string = `${import.meta.env.VITE_API_URL}/${import.meta.env.VITE_API_KEY}`;
    async getAllCategories(){
        const categorys = await axios.get<{categories : TCategory[]}>(this.baseUrl + '/categories.php');
        return categorys.data.categories;
        
    }

    async getMealsByCategory(categoryName : string){
        const meals = await axios.get<{meals : TShortMeal[]}>(this.baseUrl + "/filter.php", {
            params : {
                c : categoryName
            }
        })
        return meals.data.meals;
    }

    async getMealById(id : number){
        const meal = await axios.get<{meals : TFullMeal[]}>(this.baseUrl + "/lookup.php" , {
            params : {
                i : id
            }
        })
        return meal.data.meals[0];
    }
}
export const apiMeals = new Meal();
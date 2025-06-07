import  { type Dispatch, type SetStateAction } from 'react';
import { apiMeals } from '../../../entitys/meals/api/meals';
import type { TFetchStatus } from '../../../shared/types/TFetchStatus';
import type { TShortMeal } from '../../../entitys/meals/model/types/TShortMeal.type';
import { retryFetch } from '../../../shared/utills/retryFetch';

interface IuseGetMealsByCategory{
    setLoadMealsStatus : Dispatch<SetStateAction<TFetchStatus>>,
    setMeals : Dispatch<SetStateAction<TShortMeal[]>>
}
const useGetMealsByCategory = ({setLoadMealsStatus, setMeals} : IuseGetMealsByCategory) => {
    const loadMeals = (categoryName : string) => {
        retryFetch<TShortMeal[]>(() => apiMeals.getMealsByCategory(categoryName), 3, 300).then( (meals) =>  {
            setLoadMealsStatus("fullfiled");
            setMeals(meals)
        }).catch( (err) => {
            console.warn(err);
            setLoadMealsStatus("rejected")
        } )
    }
    return {loadMeals}
};

export default useGetMealsByCategory;
import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TFullMeal } from "../types/TFullMeal";
import type { RootState } from "../../../../app/store/AppStore";
import { retryFetch } from "../../../../shared/utills/retryFetch";
import { apiMeals } from "../../api/meals";

export const getMealById = createAsyncThunk<TFullMeal, string, {rejectValue : string}>( 
    "mealSlice/getMealById",
    async function name(id, {rejectWithValue, getState}) {
        const state = getState() as RootState;
        if (state.mealSlice.mealsById[id]){
            return state.mealSlice.mealsById[id]
        }
        try{

            const meal = await retryFetch(() => apiMeals.getMealById(Number(id)));

            return meal;
        }
        catch(e){
            console.warn(e);
            const errorMessage = e instanceof Error ? e.message : String(e);
            return rejectWithValue(errorMessage);
        }
    }
 )
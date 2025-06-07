import { createAsyncThunk } from "@reduxjs/toolkit";
import type { TShortMeal } from "../types/TShortMeal.type";
import { apiMeals } from "../../api/meals";
import type { RootState } from "../../../../app/store/AppStore";

export const getMealsByCatetogy = createAsyncThunk<
  TShortMeal[],
  { categoryName: string },
  { rejectValue: string }
>(
  "mealSlice/getMealsByCatetogyId",
  async function ({ categoryName }, { rejectWithValue, getState }) {
    const state = getState() as RootState;
    if (state.mealSlice.mealsByCategory[categoryName]) {
      return state.mealSlice.mealsByCategory[categoryName];
    }
    try {
      const meals = await apiMeals.getMealsByCategory(categoryName);
      return meals;
    } catch (err) {
      console.warn(err);
      const errorMessage =
        err instanceof Error ? err.message : "Неизвестная ошибка";
      return rejectWithValue(errorMessage);
    }
  }
);

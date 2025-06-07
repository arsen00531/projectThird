import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiMeals } from "../../api/meals";
import { retryFetch } from "../../../../shared/utills/retryFetch";
import type { TCategory } from "../types/TCategory.type";

export const getAllCategories = createAsyncThunk<TCategory[], void, {rejectValue : string}>(
    "menuSlice/getAllCategories",
    async function (_, {rejectWithValue}) {
        try{
            const categorys = await retryFetch<TCategory[]>(() => apiMeals.getAllCategories(), 300, 5);
            return categorys
        }
        catch(e){   
            const errorMessage = e instanceof Error ? e.message : 'Неизвестная ошибка';
            return rejectWithValue(errorMessage);
        }
    }
)

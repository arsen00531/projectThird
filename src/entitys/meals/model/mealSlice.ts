import {  createSlice } from "@reduxjs/toolkit";
import type { TCategory } from "./types/TCategory.type";
import type { TShortMeal } from "./types/TShortMeal.type";
import { getAllCategories } from "./extraReducers/getAllCategorys";
import type { TFetchStatus } from "../../../shared/types/TFetchStatus";
import { changeStatusReducer } from "./reducers/changeStatus";
import { getMealsByCatetogy } from "./extraReducers/getMealsByCategoryId";
import type { TFullMeal } from "./types/TFullMeal";
import { getMealById } from "./extraReducers/getMealById";


export type TMealsByCategory = Record<string, TShortMeal[]>
export interface IMealSliceInitial{
    categorys : TCategory[],
    mealsByCategory  : Record<string, TShortMeal[]>,
    categoriesStatus : TFetchStatus,
    mealsByCategoryStatus : TFetchStatus,
    mealsById : Record<string, TFullMeal>,
    mealByIdStatus : TFetchStatus
}
const initial:IMealSliceInitial = {
    categorys : [],
    mealsByCategory : {},
    categoriesStatus : "idle",
    mealsByCategoryStatus : "idle",
    mealsById : {},
    mealByIdStatus : "idle"
}

export const mealSlice = createSlice({
    name : "mealSlice",
    initialState : initial,
    reducers : {
        changeStatus : changeStatusReducer
    },
    extraReducers : builder => {

        builder.addCase( getMealById.pending, (state) => {
            state.mealByIdStatus = "pending"
        } )       
        builder.addCase( getMealById.rejected, (state) => {
            state.mealByIdStatus = "rejected"
        } )   
        builder.addCase( getMealById.fulfilled, (state, action) => {
            const id = action.meta.arg;
            state.mealsById[id] = action.payload;
            state.mealByIdStatus = "fullfiled"
        } )


        builder.addCase( getMealsByCatetogy.pending, (state) => {
            state.mealsByCategoryStatus = "pending"
        } )       
        builder.addCase( getMealsByCatetogy.rejected, (state) => {
            state.mealsByCategoryStatus = "rejected"
        } )   
        builder.addCase( getMealsByCatetogy.fulfilled, (state, action) => {
            const {categoryName} = action.meta.arg;
            state.mealsByCategory[categoryName] = action.payload;
            state.mealsByCategoryStatus = "fullfiled"
        } )


        builder.addCase(getAllCategories.rejected, (state) => {
            state.categoriesStatus = "rejected"
        })       
        builder.addCase(getAllCategories.pending, (state) => {
            state.categoriesStatus = "pending"
        })
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            state.categoriesStatus = "fullfiled"
            state.categorys = action.payload
        })


    }
})

export const {changeStatus} = mealSlice.actions 
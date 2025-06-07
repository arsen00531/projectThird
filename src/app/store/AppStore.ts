import {configureStore} from "@reduxjs/toolkit"
import { mealSlice } from "../../entitys/meals/model/mealSlice";
export const store = configureStore({
    reducer : {
        mealSlice : mealSlice.reducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

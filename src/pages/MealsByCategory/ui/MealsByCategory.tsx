import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { AsyncStateHandler } from "../../../shared/ui/AsyncStateHandler";
import { useParams } from "react-router";
import List from "../../../shared/ui/List";
import MealCard from "./MealCard";
import {
  changeStatus,
} from "../../../entitys/meals/model/mealSlice";
import Error from "../../../shared/ui/Error";
import { getMealsByCatetogy } from "../../../entitys/meals/model/extraReducers/getMealsByCategoryId";
import InformationBlock from "./InformationBlock";

const MealsByCategory = () => {
  const { mealsByCategory, mealsByCategoryStatus } = useAppSelector(
    (state) => state.mealSlice
  );

  const { category } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (mealsByCategoryStatus === "idle") {
      if (category) {
        dispatch(getMealsByCatetogy({ categoryName: category }));
      }
    }
  }, [mealsByCategoryStatus, category, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(changeStatus({ status: "idle", whichStatus: "mealsByCategoryStatus" }));
    };
  }, [dispatch]);

  if (!category){
    return <Error message="Не удалось найти блюда" />
  }
  return (
    <AsyncStateHandler
      asyncState={mealsByCategoryStatus}
      errMeassage="Ошибка нахождения блюд"
    >
      <InformationBlock />
      <List
        items={mealsByCategory[category]}
        renderItem={(meal) => <MealCard key={meal.idMeal} meal={meal} />}
      />
    </AsyncStateHandler>
  );
};

export default MealsByCategory;

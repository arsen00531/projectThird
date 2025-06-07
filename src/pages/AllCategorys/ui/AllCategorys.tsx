import { useEffect } from "react";
import { AsyncStateHandler } from "../../../shared/ui/AsyncStateHandler";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { getAllCategories } from "../../../entitys/meals/model/extraReducers/getAllCategorys";
import List from "../../../shared/ui/List";
import CategoryCard from "./CategoryCard";
import ReloadBlock from "./ReloadBlock";

const AllCategorys = () => {

  const dispatch = useAppDispatch();

  const { categorys, categoriesStatus } = useAppSelector(
    (state) => state.mealSlice
  );

  useEffect(() => {
    if (categoriesStatus === "idle") {
      dispatch(getAllCategories());
    }
  }, [categoriesStatus, dispatch]);

  return (
    <div className="text-3xl container flex flex-col">
      <ReloadBlock />
      <AsyncStateHandler
        errMeassage={"Не удалось подключиться к бэку."}
        asyncState={categoriesStatus}
      >
        <List
          items={categorys}
          renderItem={(category) => <CategoryCard key={Number(category.idCategory)} category={category} />}
        />
      </AsyncStateHandler>
    </div>
  );
};

export default AllCategorys;

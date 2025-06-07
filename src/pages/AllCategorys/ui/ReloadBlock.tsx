import { useAppDispatch } from "../../../app/store/hooks";
import { changeStatus } from "../../../entitys/meals/model/mealSlice";

const ReloadBlock = () => {
  const dispatch = useAppDispatch();
  const reloadPage = () => {
    dispatch(changeStatus({ whichStatus: "categoriesStatus", status: "idle" }));
  };

  return (
    <div className="flex flex-col items-center my-3 gap-3">
      <div className="p-3 rounded-2xl">
        <p className="font-sans text-xl sm:text-2xl text-center">
          Рецепты не обновляются при переходе на другую страничку приложения,
          чтобы не перегружать сервер. Они получаются один раз, но их можно
          обновить вручную.
        </p>
      </div>
      <button
        onClick={reloadPage}
        className="px-3 py-1 w-fit border-solid border-2 border-green-400 rounded-xl flex justify-center items-center"
      >
        <p className="text-2xl font-sans">Обновить</p>
      </button>
    </div>
  );
};

export default ReloadBlock;

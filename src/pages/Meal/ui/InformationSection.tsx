import type { TFullMeal } from "../../../entitys/meals/model/types/TFullMeal";
import useNavigateBack from "../../../shared/hooks/useNavigateBack";

const InformationSection = ({ meal }: { meal: TFullMeal }) => {
  const scrollToVideo = () => {
    const videoSection = document.getElementById("meal-video");
    videoSection?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const backHandler = useNavigateBack();
  return (
    <div className="section">
      <h3 className="title">{meal.strMeal}</h3>
      <div className="flex p-4 shadow rounded-2xl flex-col gap-4 items-center">
        <p className="font-sans text-base sm:text-lg md:text-2xl  text-center">
          Эта страница также кэширууется, то есть если мы выйдем из неё и зайдем
          обратно, то запрос с сервера не будет. Это конечно можно легко
          отключить, но просто показываю возможности redux toolkit
        </p>
        <div className="flex gap-2"> 

            <button
            onClick={backHandler}
            className="px-3 py-1 w-fit border-solid border-2 border-blue-300 rounded-xl flex justify-center items-center"
            >
            <p className="text-base sm:text-xl md:text-2xl font-sans">Back</p>
            </button>
                        <button
            onClick={scrollToVideo}
            className="px-3 py-1 w-fit border-solid border-2 border-green-400 rounded-xl flex justify-center items-center"
            >
            <p className="text-base sm:text-xl md:text-2xl font-sans">To video</p>
            </button>
        </div>
      </div>
    </div>
  );
};

export default InformationSection;

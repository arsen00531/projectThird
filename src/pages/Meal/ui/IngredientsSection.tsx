import { Fragment, type FC } from "react";
import type { TFullMeal } from "../../../entitys/meals/model/types/TFullMeal";

interface IIngredientsSection{
    meal : TFullMeal;
}
const IngredientsSection:FC<IIngredientsSection> = ({meal}) => {
    return (
        <div className="section">
            <h2 className="title">Ingredients</h2>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-8 md:gap-16 w-full">
                    <div className="grid order-2 sm:order-1 w-full grid-cols-[1fr_1fr] border-solid border rounded-lg border-black items-center">
                        {Array.from({length : 20}).map( (_, i) => {
                            const ingredient = meal[`strIngredient${i+1}` as keyof TFullMeal];
                            if (ingredient?.toString().length){
                                return (
                                    <Fragment key={i}>
                                        <div className="cell flex justify-center">
                                            <p className="text-sm md:text-base font-sans">{meal[`strIngredient${i+1}` as keyof TFullMeal]}</p>
                                        </div>
                                        <div className="cell flex justify-center">
                                            <p className="text-sm md:text-base font-sans">{meal[`strMeasure${i+1}` as keyof TFullMeal]}</p>
                                        </div>
                                    </Fragment>
                                )
                            }
                            return null;
                        }
                        )}
                    </div>
                    <img src={meal?.strMealThumb} className="sm:w-full w-full 480:w-[90%] object-cover rounded-3xl self-center mx-auto" alt="" />
            </div>
        </div>
    );
};

export default IngredientsSection;
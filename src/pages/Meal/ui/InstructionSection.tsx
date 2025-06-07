import { type FC } from 'react';
import type { TFullMeal } from '../../../entitys/meals/model/types/TFullMeal';

interface IInstructionSection{
    meal : TFullMeal;
}
const InstructionSection:FC<IInstructionSection> = ({meal}) => {
    return (
        <div className="section">
            <h2 className="title">Instruction</h2>
            <div className="flex p-4 shadow rounded-2xl flex-col gap-4 items-center border-black border border-solid">
                <p className="font-sans text-sm sm:text-base md:text-lg text-center">
                    {meal.strInstructions}
                </p>
            </div>
        </div>
    );
};

export default InstructionSection;
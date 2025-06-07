import { memo, type FC } from 'react';
import type { TShortMeal } from '../../../entitys/meals/model/types/TShortMeal.type';
import Card from '../../../shared/ui/Card';
import { useNavigate } from 'react-router';

interface IMealCard{
    meal : TShortMeal
}
const MealCard:FC<IMealCard> = ({meal}) => {
    const navigate = useNavigate()
    const clickHandler = () => {
        navigate(`/meal/${meal.idMeal}`)
    }
    return (
        <Card buttonText='Full meal' imgSrc={meal.strMealThumb} title={meal.strMeal} buttonHandler={clickHandler} />
    );
};

    export default memo(MealCard);
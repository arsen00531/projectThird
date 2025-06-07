import { useParams } from "react-router";
import { useAppDispatch, useAppSelector } from "../../../app/store/hooks";
import { useEffect } from "react";
import Error from "../../../shared/ui/Error";
import "./styles/meal.css";
import VideoSection from "./VideoSection";
import InformationSection from "./InformationSection";
import IngredientsSection from "./IngredientsSection";
import { changeStatus } from "../../../entitys/meals/model/mealSlice";
import InstructionSection from "./InstructionSection";
import { AsyncStateHandler } from "../../../shared/ui/AsyncStateHandler";
import { getMealById } from "../../../entitys/meals/model/extraReducers/getMealById";

const Meal = () => {
    
    const {id} = useParams();

    const dispatch = useAppDispatch();

    const {mealByIdStatus, mealsById} = useAppSelector(state => state.mealSlice);

    const meal = mealsById[String(id)]

    useEffect( () => {
        if (id){
            dispatch(getMealById(id))
        }
        return () => {
            dispatch(changeStatus({status : "idle", whichStatus : "mealByIdStatus"}))
        }
    }, [dispatch, id] )


    if (!id){
        return <Error message='Блюдо не найдено.' />
    }
    return (
        <AsyncStateHandler asyncState={mealByIdStatus} errMeassage="Не удалось найти блюдо">
            <div className="container">
                <InformationSection meal={meal} />
                <IngredientsSection meal={meal} />
                <InstructionSection meal={meal} />
                <VideoSection meal={meal} />
            </div>
        </AsyncStateHandler>
    );
};

export default Meal;
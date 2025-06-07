import type { FC } from "react";
import type { TFullMeal } from "../../../entitys/meals/model/types/TFullMeal";
import { getParamFromLink } from "../../../shared/utills/getParamFromLink";


interface IVideoSection{
    meal : TFullMeal;
}
const VideoSection:FC<IVideoSection> = ({meal}) => {
    return (
        <div id="meal-video" className="section">
            <h2 className="title">Video</h2>
            <div className="aspect-video w-full mx-auto">
                <iframe 
                    className="w-full h-full rounded-lg shadow"
                    src={`https://www.youtube.com/embed/${getParamFromLink(meal.strYoutube, 'v')}`}
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
            </div>
            <p className="font-sans text-base sm:text-lg md:text-2xl  text-center">   
                В россии может не быть подключения, вот <a target="_blank" rel="noopener noreferrer" className="text-blue-500 underline"  href={meal.strYoutube}>ссылка</a> тогда.
            </p>
        </div>
    );
};

export default VideoSection;
import { memo, type FC } from 'react';

interface ICard{
    title : string,
    imgSrc : string,
    buttonHandler : () => void,
    buttonText : string
}
const Card:FC<ICard> = ({imgSrc, title, buttonHandler, buttonText}) => {
    return (
       <div className="flex flex-col shadow-xl cursor-pointer border-black rounded-xl overflow-hidden">
            <img src={imgSrc ?? "/notFound.jpg"} alt="Poster" className="activator" />
            <div className="flex flex-col justify-between px-7 gap-3 mt-auto mb-3 items-center">
                <span className="mx-auto text-2xl text-black font-sans">{title}</span>
                <div className='w-full h-[1px] bg-gray-400'></div>
                <button onClick={buttonHandler} className='px-3 py-2 text-xl bg-blue-400 w-fit rounded-2xl'>{buttonText}</button>
            </div>
        </div>
    );
};

export default memo(Card);
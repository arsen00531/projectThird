import { memo, useCallback, type FC } from "react";
import type { TCategory } from "../../../entitys/meals/model/types/TCategory.type";
import Card from "../../../shared/ui/Card";
import { useNavigate } from "react-router";

interface ICategoryCard{
    category:TCategory
}
const CategoryCard:FC<ICategoryCard> = ({category}) => {
    const navigate = useNavigate();
    const onClick = useCallback(() => {
        navigate(`/meals/${category.strCategory}`);
    } , [category.strCategory, navigate] )
    return (
        <Card buttonText="Check meals" buttonHandler={onClick} imgSrc={category.strCategoryThumb} title={category.strCategory} />
    );
};

export default memo(CategoryCard);
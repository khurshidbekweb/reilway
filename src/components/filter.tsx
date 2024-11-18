import { CgClose } from "react-icons/cg";
import { Badge } from "./ui/badge";
import { useLanguage } from "@/store";
import { useQuery } from "@tanstack/react-query";
import { reviewUtils } from "@/utils/review";
import { paretReview } from "@/types";

const Filter = () => {
    const {language,changeFilter, filter} = useLanguage()
    const {data} = useQuery({
        queryFn: reviewUtils.getReviewStatictics,
        queryKey: ['get_all_statistics_stats']
    })
    const turkum = data?.parentReviewTypeStats.find((e: paretReview) => e._id === filter?.reviewType)
    

    const filterStatus = [
        {
            'uz': 'Ijobiy fikr bildirish',
            'ru':'Положительный отзыв'
        },         
        {
            'uz': 'Shikoyat',
            'ru':'Жалоба'
        },       
        {
            'uz': 'Taklif',
            'ru':'Предложение'
        },
    ]
    
    return (
        <div className={`${filter.mark===null && filter.reviewType===null ? 'hidden':''}`}>
            <h2 className="mt-2 text-[16px] font-semibold">{language=='uz'?'Faol filtrlar: ':'Активные фильтры: '}</h2>
            <div className={` flex gap-x-2 my-3 items-center justify-end ml-auto`}>
            <Badge variant="outline" className={`flex gap-2 ${filter.mark?'':'hidden'}`}>{language=='uz'?'Turi':'Тип'}: {filter.mark ? filterStatus[filter.mark-1][language] : ''}</Badge>
            <Badge variant="outline" className={`flex gap-2 ${filter.reviewType?'':'hidden'}`}>{language=='uz'?'Kategoriya':'Категория'}: {filter.reviewType ? turkum.name[language] : ''}</Badge>
            <button onClick={() => changeFilter({mark: null, reviewType: null})}><CgClose/></button>
        </div>
        </div>
    );
};

export default Filter;
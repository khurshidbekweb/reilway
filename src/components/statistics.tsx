import { useLanguage } from "@/store";
import { paretReview, statistics } from "@/types";
import { reviewUtils } from "@/utils/review";
import { useQuery } from "@tanstack/react-query";
import { CgNotes } from "react-icons/cg";

const Statistics = () => {
    const {language} = useLanguage()
    const {data} = useQuery({
        queryFn: reviewUtils.getReviewStatictics,
        queryKey: ['get_all_statistics_stats']
    })
    return (
        <div>
            <h1 className="text-2xl my-2">{language =='uz'?"Sharhlarning umumiy soni":'Oбщее число отзывов'}</h1>
            <div className="w-full md:w-[70%] grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
                <div className="shadow-md border p-2 rounded-lg text-white bg-green-400 flex items-start justify-between">
                    <div className="flex flex-col items-start space-y-2">
                        <h3 className="text-[17px]">{language=='uz'?'Ijobiy fikr bildirish':'Положительный отзыв'}</h3>
                        <p className="font-bold text-xl">{data?.categoryStats?.find((el:statistics) => el._id === 1)?.count ? data?.categoryStats?.find((el:statistics) => el._id === 1)?.count  : '0'}</p>
                    </div>
                    <span className="shadow-lg text-white p-2 rounded-full bg-green-500"><CgNotes size={20}/></span>
                </div>
                <div className="shadow-md  border p-2 rounded-lg text-white bg-red-400 flex items-start justify-between">
                    <div className="flex flex-col items-start space-y-2">
                        <h3 className="text-[17px]">{language=='uz'?'Shikoyat':'Жалоба'}</h3>
                        <p className="font-bold text-xl">{data?.categoryStats?.find((el:statistics) => el._id === 2)?.count ? data?.categoryStats?.find((el:statistics) => el._id === 2)?.count  : '0'}</p>
                    </div>
                    <span className="shadow-lg text-white p-2 rounded-full bg-red-500"><CgNotes size={20}/></span>
                </div>
                <div className="shadow-md  border p-2 rounded-lg text-white bg-blue-400 flex items-start justify-between">
                    <div className="flex flex-col items-start space-y-2">
                        <h3 className="text-[17px]">{language=='uz'?'Taklif':'Предложение'}</h3>
                        <p className="font-bold text-xl">{data?.categoryStats?.find((el:statistics) => el._id === 3)?.count ? data?.categoryStats?.find((el:statistics) => el._id === 3)?.count  : '0'}</p>
                    </div>
                    <span className="shadow-lg text-white p-2 rounded-full bg-blue-500"><CgNotes size={20}/></span>
                </div>
                <div className="shadow-md  border p-2 rounded-lg text-white bg-yellow-400 flex items-start justify-between">
                    <div className="flex flex-col items-start space-y-2">
                        <h3 className="text-[17px]">{language=='uz'?'Tugallanmagan ko`rib chiqish':'Незаконченный обзор'}</h3>
                        <p className="font-bold text-xl">{data?.categoryStats?.find((el:statistics) => el._id === 0)?.count ? data?.categoryStats?.find((el:statistics) => el._id === 0)?.count  : '0'}</p>
                    </div>
                    <span className="shadow-lg text-white p-2 rounded-full bg-yellow-500"><CgNotes size={20}/></span>
                </div>
            </div>
            <h1 className="text-2xl my-2">{language =='uz'?"Turkum bo'yicha sharhlar soni":'Число отзывов по категориям'}</h1>
            <div className="status grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                    {data?.parentReviewTypeStats.length && data.parentReviewTypeStats.map((el:paretReview) => (
                        <div key={el._id} className="shadow-md max-w-[250px] border p-2 rounded-lg text-white bg-blue-400 flex items-start justify-between">
                            <div className="flex flex-col items-start space-y-2">
                                <h3 className="text-[17px]">{el.name[language]}</h3>
                                <p className="font-bold text-xl">{el.count}</p>
                            </div>
                            <span className="shadow-lg text-white p-2 rounded-full bg-blue-500"><CgNotes size={20}/></span>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Statistics;
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "./ui/table";
import { review } from "@/types";
import { reviewUtils } from "@/utils/review";
import { useQuery } from "@tanstack/react-query";
import Loader from "./loader";
import { useLanguage } from "@/store";



const TableReilway = () => {
    const {language} = useLanguage()
    const {data, isLoading} = useQuery({
        queryFn: reviewUtils.getRewievs,
        queryKey: ['get_all_review']
    })    
    console.log(data?.data[0]);
    
    return (
        isLoading ? <Loader/> :
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[10x]">№</TableHead>
                    <TableHead>{language=='uz'?'Foydalanuvchi':'Пользователь'}</TableHead>
                    <TableHead>{language=='uz'?'Baho':'Оценка'}</TableHead>
                    <TableHead>{language=='uz'?'Review/Sub review':'Обзор/Подобзор'}</TableHead>
                    <TableHead>{language=='uz'?'Status':'Статус'}</TableHead>
                    <TableHead>{language=='uz'?'Bilet':'Билет'}</TableHead>
                    <TableHead>{language=='uz'?'Yaratilgan vaqti':'Время запроса'}</TableHead>
                    <TableHead className="!w-[200px]">{language=='uz'?'Kommentariyalar':'Текст отзыва'}</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.data?.length && data.data.map((el:review, i:number) => (
                    <TableRow key={el._id}>
                        <TableCell className="font-medium">{i+1}</TableCell>
                        <TableCell>{el.user.phone_number==null?'aniqlanmagan':'+'+el.user.phone_number}</TableCell>
                        <TableCell><span className="border inline-block px-2">{el.mark}</span></TableCell>
                        <TableCell><ul>{el.parent_review_type?.name[language]}
                            <li className="ml-2">● {el.review_type?.name[language]}</li>
                        </ul></TableCell>
                        <TableCell><p className={`p-1 rounded-md text-center text-[14px] font-semibold text-white ${el.status==0?'bg-red-500':'bg-green-500'}`}>{el.status==0?'Jarayonda':'Tayyor'}</p></TableCell>
                        <TableCell></TableCell>
                        <TableCell>{el.createdAt.slice(11, 16)} -- {el.createdAt.slice(0, 10)}</TableCell>
                        <TableCell className="line-clamp-2">{el.comment}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    );
};

export default TableReilway;
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
import TicketImg from "./ticket-img";



const TableReilway = () => {
    const {language, filter} = useLanguage()
    const {data, isLoading} = useQuery({
        queryFn: reviewUtils.getRewievs,
        queryKey: ['get_all_review']
    })    
    console.log(data?.data);
    console.log(filter);
    
    const sort =  filter.mark || filter.reviewType ? data?.data.filter((e: review) => e?.parent_review_type?._id ===  filter.reviewType && e?.category === filter.mark) : data?.data 
    return (
        isLoading ? <Loader/> :
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[10x]">№</TableHead>
                    <TableHead>{language=='uz'?'Foydalanuvchi':'Пользователь'}</TableHead>
                    <TableHead>{language=='uz'?'Baho':'Оценка'}</TableHead>
                    <TableHead>{language=='uz'?'Kategoriya':'Категория'}</TableHead>
                    <TableHead>{language=='uz'?'Bilet':'Билет'}</TableHead>
                    <TableHead>{language=='uz'?'Yaratilgan vaqti':'Время запроса'}</TableHead>
                    <TableHead className="!w-[200px]">{language=='uz'?'Kommentariyalar':'Текст отзыва'}</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {!sort.length ? <h2 className="p-2 border bg-yellow-300 text-black rounded-md my-2">Bu categoriya boyicha ma'lumot mavjud emas</h2> : sort.map((el:review, i:number) => (                    
                    <TableRow key={el._id}>
                        <TableCell className="font-medium">{i+1}</TableCell>
                        <TableCell>{el.user.phone_number==null?'aniqlanmagan':el.user.phone_number.trim().length>12?el.user.phone_number:'+'+el.user.phone_number}</TableCell>
                        <TableCell><span className="border inline-block px-2">{el.mark}</span></TableCell>
                        <TableCell><h3>{el.parent_review_type?.name ? el.parent_review_type?.name[language] : 0}</h3></TableCell>
                        <TableCell>{el?.ticket ? <TicketImg ticket={el.ticket}/>: ''}</TableCell>
                        <TableCell>{el.createdAt.slice(0, 10)} {el.createdAt.slice(11, 16)}</TableCell>
                        <TableCell className="line-clamp-2">{el.comment}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    );
};

export default TableReilway;
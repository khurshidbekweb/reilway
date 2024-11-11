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


const TableReilway = () => {
    const {data, isLoading} = useQuery({
        queryFn: reviewUtils.getRewievs,
        queryKey: ['get_all_review']
    })
    console.log(data?.data);  
    
    return (
        isLoading ? <Loader/> :
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[10x]">№</TableHead>
                    <TableHead>Пользователь</TableHead>
                    <TableHead>Оценка</TableHead>
                    <TableHead className="!w-[350px]">Текст отзыва</TableHead>
                    <TableHead>Фото/Видео</TableHead>
                    <TableHead>Билет</TableHead>
                    <TableHead>Время запроса</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.data?.length && data.data.map((el:review, i:number) => (
                    <TableRow>
                        <TableCell className="font-medium">{i+1}</TableCell>
                        <TableCell>{el.user.phone_number==null?'aniqlanmagan':'+'+el.user.phone_number}</TableCell>
                        <TableCell><span className="border inline-block px-2">{el.mark}</span></TableCell>
                        <TableCell className="line-clamp-2">{el.comment}</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell>{el.createdAt.slice(11, 16)} -- {el.createdAt.slice(0, 10)}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    );
};

export default TableReilway;
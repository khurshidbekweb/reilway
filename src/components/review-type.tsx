import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "./ui/table";
import { getReviewType, sub_reviews } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from "./loader";
import { useLanguage } from "@/store";
import { reviewTypeUtils } from "@/utils/review-type";
import EditReview from "@/modal/edit-review";
import DeleteReview from "@/modal/delete-review";
import toast from "react-hot-toast";

const ReviewType = () => {
    const {language} = useLanguage()
    const queryClient = useQueryClient()
    const {data, isLoading} = useQuery({
        queryFn: reviewTypeUtils.getReviewType,
        queryKey: ['get_all_review_types']
    })    

    const deleteReviewType = useMutation({
        mutationFn: reviewTypeUtils.deleteReviewType,
        onSuccess:()=>{
            toast.success('O`chirildi')
            queryClient.invalidateQueries({queryKey: ['get_all_review_types']})
        },
        onError: (err) => {
            console.log(err);
            toast.error('Xatolik')
        }
    })
    
    return (
        isLoading ? <Loader/> :
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[10x]">№</TableHead>
                    <TableHead>{language=='uz'?'Name':'Заголовок'}</TableHead>
                    <TableHead>{language=='uz'?'Review/Sub review':'Обзор/Подобзор'}</TableHead>
                    <TableHead>{language=='uz'?'Yaratilgan vaqti':'Время запроса'}</TableHead>
                    <TableHead>{language=='uz'?'Yangilash vaqti':'Обновлять запроса'}</TableHead>
                    <TableHead>{language=='uz'?'':''}</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data?.data?.length && data.data.map((el:getReviewType, i:number) => (
                    <TableRow key={el._id}>
                        <TableCell className="font-medium">{i+1}</TableCell>
                        <TableCell className="font-medium">{el.name[language]}</TableCell>
                        <TableCell><ul>
                            {el.sub_reviews.map((e:sub_reviews) => (
                                <li key={e._id} className="ml-2">● {e.name[language]}</li>
                            ))}
                        </ul></TableCell>
                        <TableCell>{el.createdAt.slice(11, 16)} -- {el.createdAt.slice(0, 10)}</TableCell>
                        <TableCell>{el.updatedAt.slice(11, 16)} -- {el.updatedAt.slice(0, 10)}</TableCell>
                        <TableCell className="flex items-center gap-3">
                            <EditReview id={el._id} name={el.name}/>
                            <DeleteReview id={el._id} fn={deleteReviewType.mutate}/>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>

    );
};

export default ReviewType;
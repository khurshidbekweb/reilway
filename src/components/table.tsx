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
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from "./loader";
import { useLanguage } from "@/store";
import TicketImg from "./ticket-img";
import toast from "react-hot-toast";
import DeleteReview from "@/modal/delete-review";
import PaginationContyent from "./pagination";
import { useState } from "react";
import SeeComment from "@/modal/see-comment";



const TableReilway = () => {
    const { language, filter } = useLanguage()
    const queryClient = useQueryClient()
    const { data, isLoading } = useQuery({
        queryFn: reviewUtils.getRewievs,
        queryKey: ['get_all_review']
    })

    const deleteReview = useMutation({
        mutationFn: reviewUtils.deleteReview,
        onSuccess: () => {
            toast.success('O`chirildi')
            queryClient.invalidateQueries({ queryKey: ['get_all_review'] })
        },
        onError: (err) => {
            console.log(err);
            toast.error('Xatolik')
        }
    })

    const sort = filter.mark || filter.reviewType ? data?.data.filter((e: review) => {
        let result = false
        if (filter.mark == null) {
            if (e?.parent_review_type?._id === filter.reviewType) {
                result = true
            }
        }

        if (filter.reviewType == null) {
            if (e?.category === filter.mark) {
                result = true
            }
        }

        if (filter.mark && filter.reviewType) {
            if (e?.category === filter.mark && e?.parent_review_type?._id === filter.reviewType) {
                result = true
            }
        }
        return result;
    }) : data?.data

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(5);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sort?.slice(indexOfFirstPost, indexOfLastPost);

    return (
        isLoading ? <Loader /> :
            <>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[10x]">№</TableHead>
                            <TableHead>{language == 'uz' ? 'Foydalanuvchi' : 'Пользователь'}</TableHead>
                            <TableHead>{language == 'uz' ? 'Baho' : 'Оценка'}</TableHead>
                            <TableHead>{language == 'uz' ? 'Kategoriya' : 'Категория'}</TableHead>
                            <TableHead>{language == 'uz' ? 'Bilet' : 'Билет'}</TableHead>
                            <TableHead>{language == 'uz' ? 'Yaratilgan vaqti' : 'Время запроса'}</TableHead>
                            <TableHead className="!w-[200px]">{language == 'uz' ? 'Kommentariyalar' : 'Текст отзыва'}</TableHead>
                            <TableHead></TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {!currentPosts?.length ? <h2 className="p-2 border bg-yellow-300 text-black rounded-md my-2">Bu categoriya boyicha ma'lumot mavjud emas</h2> : currentPosts.map((el: review, i: number) => (
                            <TableRow key={el._id}>
                                <TableCell className="font-medium">{i + 1}</TableCell>
                                <TableCell>{el.user.phone_number == null ? 'aniqlanmagan' : el.user.phone_number.trim().length > 12 ? el.user.phone_number : '+' + el.user.phone_number}</TableCell>
                                <TableCell><span className="border inline-block px-2">{el.mark}</span></TableCell>
                                <TableCell><h3>{el.parent_review_type?.name ? el.parent_review_type?.name[language] : 0}</h3></TableCell>
                                <TableCell>{el?.ticket ? <TicketImg ticket={el.ticket} /> : ''}</TableCell>
                                <TableCell>{el.createdAt.slice(0, 10)} {el.createdAt.slice(11, 16)}</TableCell>
                                <TableCell title={el.comment} className="line-clamp-2 h-[50px]">{el.comment.length>=50?<SeeComment comment={el.comment}/>:el.comment}</TableCell>
                                <TableCell><DeleteReview fn={deleteReview.mutate} id={el?._id} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <PaginationContyent currentPage={currentPage} setPostPerPage={setPostPerPage}  postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}  totalPosts={sort?.length} />
            </>
    );
};

export default TableReilway;
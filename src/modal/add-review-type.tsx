import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { reviewType } from "@/types";
import { useLanguage } from "@/store";
import { reviewTypeUtils } from "@/utils/review-type";
import toast from "react-hot-toast";
import { useState } from "react";

const AddReviewType = () => {
    const {language} = useLanguage()
    const queryClient = useQueryClient()
    const [open, setOpen] = useState(false)
    const {data} = useQuery({
        queryFn: reviewTypeUtils.getReviewType,
        queryKey: ['get_all_review_types']
    })
    const addReview = useMutation({
        mutationFn: reviewTypeUtils.postReviewType,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['get_all_review_types']})
            toast.success('Success add review ✅')
            setOpen(false)
        },
        onError:(err) => {
            console.log(err);
            toast.error('Error ❌')
        }
    })
    const addhnadleReview = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            uz: { value: string };
            ru: { value: string };
            parent: { value: string };
        };
        addReview.mutate({
            name: {
                uz: target.uz.value,
                ru: target.ru.value
            },
            reviewTypeId: target.parent.value || null
        })
    }
    
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)} className="bg-[#747d8c] text-white block ml-auto">{language=='uz'?'Review type qo`shish':'Добавить тип отзыва'}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{language=='uz'?'Review type qo`shish':'Добавить тип отзыва'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={addhnadleReview}>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Uz
                        </Label>
                        <Input
                            id="name"
                            name="uz"
                            className="col-span-3"
                            placeholder="Salom"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Ru
                        </Label>
                        <Input
                        name="ru"
                            id="username"
                            placeholder="Привет"
                            className="col-span-3"
                            required
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">
                            Parent review
                        </Label>
                        <Select name="parent">
                        <SelectTrigger className="col-span-3">
                            <SelectValue placeholder={language=='uz'?'Ota reviewni tanlang':'Выберите родительский отзыв'} />
                        </SelectTrigger>
                        <SelectContent>
                            {data?.subReviews?.length && data.subReviews.map((el:reviewType) => (
                                <SelectItem value={el._id} key={el._id}>{el.name[language]}</SelectItem>
                            ))}
                        </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button className="bg-black text-white" type="submit">Qo'shish</Button>
                </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddReviewType;
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { reviewType } from "@/types";
import { useLanguage } from "@/store";
import { reviewTypeUtils } from "@/utils/review-type";
import toast from "react-hot-toast";

const AddReviewType = () => {
    const {language} = useLanguage()
    const queryClient = useQueryClient()
    const {data} = useQuery({
        queryFn: reviewTypeUtils.getReviewType,
        queryKey: ['gett_all_review']
    })
    const addReview = useMutation({
        mutationFn: reviewTypeUtils.postReviewType,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['gett_all_review']})
            toast.success('Success add review ✅')

        },
        onError:(err) => {
            console.log(err);
            toast.error('Error ❌')
        }
    })
    console.log(data?.data);
    const addhnadleReview = (e) => {
        e.preventDefault()
        addReview.mutate({
            name: {
                uz: e.target.uz.value,
                ru: e.target.ru.value
            },
            reviewTypeId: e.target.parent.value || null
        })
    }
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-secondary block ml-auto">{language=='uz'?'Review type qo`shish':'Добавить тип отзыва'}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add review</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
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
                            {data?.data?.length && data.data.map((el:reviewType) => (
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
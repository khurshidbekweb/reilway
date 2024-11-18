import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useLanguage } from "@/store";
import { reviewTypeUtils } from "@/utils/review-type";
import toast from "react-hot-toast";
import { useState } from "react";
import { MdAdd, MdOutlineAddCircle } from "react-icons/md";

const AddReviewType = () => {
    const {language} = useLanguage()
    const queryClient = useQueryClient()
    const [open, setOpen] = useState(false)
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
            }
        })
    }
    
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
            <>
            <Button onClick={() => setOpen(true)} className="bg-black block md:hidden text-white ml-auto"><MdAdd size={25}/></Button>
            <Button onClick={() => setOpen(true)} className="bg-[#747d8c] hidden md:block text-white ml-auto">{language=='uz'?'Kategoriya qo`shish':'Добавить категорию'}</Button>
            </>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{language=='uz'?'Kategoriya qo`shish':'Добавить категорию'}</DialogTitle>
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
                            className="col-span-3"
                            required
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button className="bg-black text-white" type="submit">{language=='uz'?'Qo`shish':'Добавить'}</Button>
                </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default AddReviewType;
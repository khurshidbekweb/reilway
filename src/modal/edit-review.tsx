import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useLanguage } from "@/store";
import toast from "react-hot-toast";
import { reviewTypeUtils } from "@/utils/review-type";
import { MdOutlineModeEdit } from "react-icons/md";
import { useState } from "react";

interface editProps{
    name: {
        uz: string
        ru: string
    }
    id: string
}

const EditReview = ({id, name}:editProps) => {
    const {language} = useLanguage()
    const queryClient = useQueryClient()
    const [open, setOpen] = useState(false)
    const editReviewType = useMutation({
        mutationFn: reviewTypeUtils.editReviewType,
        onSuccess:() => {
            toast.success('Taxrirlandi')
            queryClient.invalidateQueries({queryKey: ['get_all_review_types']})
            setOpen(false)
        },
        onError:(err) => {
            console.log(err);            
            toast.error('Error ')
        }
    })
    const addHnadleReviewType = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const target = e.target as typeof e.target & {
            uz: { value: string };
            ru: { value: string };
            id: {value: string}
        };
        editReviewType.mutate({
            name: {
                uz: target.uz.value,
                ru: target.ru.value
            },
            id: id
        })
    }
    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)} variant={"link"} className=" text-green-800 block ml-auto"><MdOutlineModeEdit/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{language=='uz'?'Kategoriya qo`shish':'Добавить категорию'}</DialogTitle>
                </DialogHeader>
                <form onSubmit={addHnadleReviewType}>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Uz
                        </Label>
                        <Input
                            id="name"
                            name="uz"
                            defaultValue={name.uz}
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
                            defaultValue={name.ru}
                            placeholder="Привет"
                            className="col-span-3"
                            required
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button className="bg-black text-white" type="submit">{language=='uz'?'Tahrirlash':'Редактировать'}</Button>
                </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
        </div>
    );
};

export default EditReview;
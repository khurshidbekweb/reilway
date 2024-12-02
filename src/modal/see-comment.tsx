import { useLanguage } from "@/store";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";

interface PropsComment{
  comment: string
}

const SeeComment = ({comment}:PropsComment) => {
  const {language} = useLanguage()
  return (
    <Dialog>
      <DialogTrigger className="line-clamp-2 text-start h-[45px]">{comment}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{language == 'uz' ?"Izoh":"Комментарий"}</DialogTitle>
          <DialogDescription className="text-[17px] font-semibold text-start">
              {comment}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SeeComment;
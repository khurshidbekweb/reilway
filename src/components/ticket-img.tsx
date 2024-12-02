import { IMG_BASE_URL } from "@/constants";
import {
  Dialog, DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "./ui/dialog";

import { CiImageOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import { DownloadIcon } from "@radix-ui/react-icons";
import { useLanguage } from "@/store";

interface image {
  ticket: string
}
const TicketImg = (image: image) => {
  const {language} = useLanguage()
  return (
    <Dialog>
      <DialogTrigger> <CiImageOn size={25} /></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            <img className="!w-[250px] !h-[250px] mx-auto" src={`${IMG_BASE_URL}${image.ticket}`} alt="Ticket image" />
          </DialogDescription>
            <Link className="w-[50%] text-center flex items-center justify-center gap-x-3 mx-auto bg-blue-400 text-white p-1 rounded-md" to={`${IMG_BASE_URL}${image.ticket}`} download={"img"}>{language=='uz'?'Yuklab olish':"Скачать"} <DownloadIcon/></Link>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TicketImg;
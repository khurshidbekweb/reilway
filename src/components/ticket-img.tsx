import { IMG_BASE_URL } from "@/constants";
import {
  Dialog, DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "./ui/dialog";

import { CiImageOn } from "react-icons/ci";

interface image {
  ticket: string
}
const TicketImg = (image: image) => {
  return (
    <Dialog>
      <DialogTrigger><CiImageOn size={25} /></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription>
            <img className="!w-[250px] !h-[250px] mx-auto" src={`${IMG_BASE_URL}${image.ticket}`} alt="Ticket image" />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default TicketImg;
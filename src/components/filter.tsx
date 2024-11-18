import { CgClose } from "react-icons/cg";
import { Badge } from "./ui/badge";

const Filter = () => {
    
    return (
        <div className="flex gap-x-5 items-center w-[250px] ml-auto">
            <Badge variant="outline">Badge</Badge>
            <Badge variant="outline">Badge</Badge>
            <button><CgClose/></button>
        </div>
    );
};

export default Filter;
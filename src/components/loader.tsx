import { PiSpinnerLight } from "react-icons/pi";
const Loader = () => {
    return (
        <div className="my-20 flex justify-center items-center" >
            <PiSpinnerLight size={32} strokeWidth={2.25} className="animate-spin" />
        </div>
    );
};

export default Loader;
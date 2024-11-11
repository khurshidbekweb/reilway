import Statistics from "./statistics";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Navbar = () => {
    return (
        <div className="max-w-7xl mx-auto px-2">
            <div className=" flex justify-between items-center my-2">
                <h1 className="text-2xl font-serif">REIWAY</h1>
                
                <Button>Log out</Button>
            </div>
            <Separator/>
            <Statistics/>
        </div>
    );
};

export default Navbar;
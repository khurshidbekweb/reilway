import AddReviewType from "@/components/add-review-type";
import Navbar from "@/components/navbar";
import TableReilway from "@/components/table";

const Home = () => {
    return (
        <div className="px-2 max-w-7xl mx-auto">
            <Navbar/>
            <AddReviewType/>
            <div className="home-page my-2 max-w-7xl mx-auto px-2 overflow-hidden overflow-x-scroll md:px-0">
                <TableReilway/>
            </div>
        </div>
    );
};

export default Home;
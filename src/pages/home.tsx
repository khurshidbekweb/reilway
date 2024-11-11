import AddReviewType from "@/components/add-review-type";
import Navbar from "@/components/navbar";
import TableReilway from "@/components/table";

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="home-page my-2 max-w-7xl mx-auto px-2 overflow-hidden overflow-x-scroll md:px-0">
                <AddReviewType/>
                <TableReilway/>
            </div>
        </>
    );
};

export default Home;
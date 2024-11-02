import Navbar from "@/components/navbar";
import TableReilway from "@/components/table";

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className="home-page my-2 max-w-7xl mx-auto px-1 overflow-hidden overflow-x-scroll">
            <TableReilway/>
        </div>
        </>
    );
};

export default Home;
import AddReviewType from "@/modal/add-review-type";
import Navbar from "@/components/navbar";
import ReviewType from "@/components/review-type";
import TableReilway from "@/components/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";

type reviewChange = 'review' | 'review-type'


const Home = () => {
    const [review, setReview] = useState<reviewChange>('review')

    return (
        <div className="px-2 max-w-7xl mx-auto">
            <Navbar/>
            <div className="flex justify-between items-center my-4">
                <div className="flex items-center">
                    <Button onClick={() =>setReview('review')} className={` text-white rounded-e-none border-e ${review=='review'?'bg-blue-500':'bg-[#747d8c]'}`}>Review</Button>
                    <Button onClick={() =>setReview('review-type')}  className={` text-white rounded-s-none ${review=='review-type'?'bg-blue-500':'bg-[#747d8c]'}`}>Review Type</Button>
                </div>
                {review==='review-type' ? <AddReviewType/> :''} 
            </div>
            <div className="home-page my-2 max-w-7xl mx-auto px-2 overflow-hidden overflow-x-scroll md:px-0">
                {review ==='review' ? <TableReilway/> :<ReviewType/>}
            </div>
        </div>
    );
};

export default Home;
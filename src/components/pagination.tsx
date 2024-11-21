import React from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "./ui/pagination";

interface PropsType{
    postsPerPage:number
    totalPosts:number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    currentPage:number
}

const PaginationContyent = ({postsPerPage, totalPosts, setCurrentPage, currentPage}: PropsType) => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    console.log(currentPage);
    const pageNumbers = []

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    

    const handlePageChange = (page: number) => {
        setCurrentPage(page); // Bu yerda setCurrentPage funksiyasidan foydalanamiz
    };
    return (
        <div className="ml-0">
            <Pagination>
            <PaginationContent>
                
            <PaginationItem>
                    <PaginationPrevious className="w-7 h-7 border rounded-full flex items-center justify-center p-0" onClick={() => handlePageChange(currentPage-1)}/>
                </PaginationItem>
                {pageNumbers?.map((e: number) =>(
                    <PaginationItem key={e}>
                        <PaginationLink onClick={() => handlePageChange(e)}>{e}</PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    {pageNumbers.length>50?<PaginationEllipsis />:''}
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext className="w-7 h-7 border rounded-full flex items-center justify-center p-0" onClick={() => handlePageChange(currentPage+1)}/>
                </PaginationItem>
            </PaginationContent>
        </Pagination>
        </div>
    );
};

export default PaginationContyent;
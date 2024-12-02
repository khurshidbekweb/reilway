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
import {
    Select, SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "./ui/select";
import { Button } from "./ui/button";
import { useLanguage } from "@/store";

interface PropsType {
    postsPerPage: number
    totalPosts: number
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    setPostPerPage: React.Dispatch<React.SetStateAction<number>>
    currentPage: number
}

const PaginationContyent = ({ postsPerPage, totalPosts, setCurrentPage, setPostPerPage, currentPage }: PropsType) => {
    const totalPages = Math.ceil(totalPosts / postsPerPage);
    console.log(currentPage);
    const pageNumbers = []
    const { language } = useLanguage()

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };
    return (
        <div className="ml-0 flex items-center gap-3 p-3">
            <Button className="shadow-md border">{language == 'uz' ? 'Umumiy soni: ' : 'Общее количество: '} {totalPosts}</Button>
            <Select onValueChange={(value) => setPostPerPage(Number(value))}>
                <SelectTrigger className="w-[70px]">
                    <SelectValue placeholder={postsPerPage} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='5'>5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                </SelectContent>
            </Select>
            {totalPosts >= postsPerPage ? <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious className="w-7 h-7 border rounded-full flex items-center justify-center p-0" onClick={() => handlePageChange(currentPage - 1)} />
                    </PaginationItem>
                    {pageNumbers?.map((e: number) => (
                        <PaginationItem key={e}>
                            <PaginationLink className={currentPage === e ? 'border border-blue-500 cursor-pointer' : 'cursor-pointer'} onClick={() => handlePageChange(e)}>{e}</PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        {pageNumbers.length > 50 ? <PaginationEllipsis /> : ''}
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext className="w-7 h-7 border rounded-full flex items-center justify-center p-0" onClick={() => handlePageChange(currentPage + 1)} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination> : ''}
        </div>
    );
};

export default PaginationContyent;
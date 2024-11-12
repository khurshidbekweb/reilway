import { useLanguage } from "@/store";
import Statistics from "./statistics";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LuLogOut } from "react-icons/lu";

type Language = 'uz' | 'ru';

const Navbar = () => {
    const { language, changeLanguage } = useLanguage();
    const token = localStorage.getItem('token')
    const naviagte = useNavigate()
    useEffect(() => {
      if(!token){
        naviagte('/')
      }
    },[naviagte, token])
    
    return (
        <div className="max-w-7xl mx-auto px-2">
            <div className=" flex items-center justify-between my-2">
                <h1 className="text-2xl font-serif">{language=='uz'?'REIWAY':'РЕЙВЕЙ'}</h1>
                <div className="flex items-center gap-3">
                <Select onValueChange={(value:string) => changeLanguage(value as Language)}>
                    <SelectTrigger className="w-[70px]">
                        <SelectValue placeholder={language} />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="uz">uz</SelectItem>
                        <SelectItem value="ru">ru</SelectItem>
                    </SelectContent>
                </Select>
                <Button onClick={()=>{localStorage.removeItem('token')
                    window.location.reload()}} className="bg-red-500 text-white">{language=='uz'?'Chiqish':'Выход'} <LuLogOut size={35} /></Button>
                </div>
            </div>
            <Separator/>
            <Statistics/>
        </div>
    );
};

export default Navbar;
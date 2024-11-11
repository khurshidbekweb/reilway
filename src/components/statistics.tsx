import { useLanguage } from "@/store";
import { CgNotes } from "react-icons/cg";

const Statistics = () => {
    const {language} = useLanguage()
    return (
        <div>
            <h1 className="text-2xl my-2">{language =='uz'?"Statistika":'Статистика'}</h1>
            <div className="status grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                <div className="shadow-md max-w-[250px] border p-2 rounded-lg text-white bg-blue-400 flex items-start justify-between">
                    <div className="flex flex-col items-start space-y-2">
                        <h3 className="text-[17px]">{language=='uz'?'Top, sharhlar':'Кол. отзывов'}</h3>
                        <p className="font-bold text-xl">97</p>
                    </div>
                    <span className="shadow-lg text-white p-2 rounded-full bg-blue-500"><CgNotes size={20}/></span>
                </div>
                <div className="shadow-md max-w-[250px] border p-2 rounded-md text-white bg-red-500 flex items-start justify-between">
                    <div className="flex flex-col items-start space-y-2">
                    <h3 className="text-[17px]">1 {language=='uz'?'balli sharhlar':'балл. отзывы'}</h3>
                    <p className="font-bold text-xl">2</p>
                    </div>
                    <span className="shadow-lg text-white p-2 rounded-full bg-red-600"><CgNotes size={20}/></span>
                </div>
                <div className="shadow-md max-w-[250px] border p-2 rounded-md text-white bg-red-400 flex items-start justify-between">
                    <div className="flex flex-col items-start space-y-2">
                    <h3 className="text-[17px]">2 {language=='uz'?'balli sharhlar':'балл. отзывы'}</h3>
                    <p className="font-bold text-xl">3</p>
                    </div>
                    <span className="shadow-lg text-white p-2 rounded-full bg-red-500"><CgNotes size={20}/></span>
                </div>
                <div className="shadow-md max-w-[250px] border p-2 rounded-md text-white bg-yellow-400 flex items-start justify-between">
                    <div className="flex flex-col items-start space-y-2">
                        <h3 className="text-[17px]">3 {language=='uz'?'balli sharhlar':'балл. отзывы'}</h3>
                    <p className="font-bold text-xl">8</p>
                    </div>
                    <span className="shadow-lg text-white p-2 rounded-full bg-yellow-500"><CgNotes size={20}/></span>
                </div>
                <div className="shadow-md max-w-[250px] border p-2 rounded-md text-white bg-lime-400 flex items-start justify-between">
                    <div className="flex flex-col items-start space-y-2">
                        <h3 className="text-[17px]">4 {language=='uz'?'balli sharhlar':'балл. отзывы'}</h3>
                    <p className="font-bold text-xl">12</p>
                    </div>
                    <span className="shadow-lg text-white p-2 rounded-full bg-lime-500"><CgNotes size={20}/></span>
                </div>
                <div className="shadow-md max-w-[250px] border p-2 rounded-md text-white bg-green-500 flex items-start justify-between">
                    <div className="flex flex-col items-start space-y-2">
                        <h3 className="text-[17px]">5 {language=='uz'?'balli sharhlar':'балл. отзывы'}</h3>
                    <p className="font-bold text-xl">50</p>
                    </div>
                    <span className="shadow-lg text-white p-2 rounded-full bg-green-600"><CgNotes size={20}/></span>
                </div>                
            </div>
        </div>
    );
};

export default Statistics;
import { cn } from "@/lib/utils";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "./ui/table";

const TableReilway = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[10x]">№</TableHead>
                    <TableHead>Пользователь</TableHead>
                    <TableHead>Оценка</TableHead>
                    <TableHead className="!w-[350px]">Текст отзыва</TableHead>
                    <TableHead>Фото/Видео</TableHead>
                    <TableHead>Билет</TableHead>
                    <TableHead>Время запроса</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">1</TableCell>
                    <TableCell>+998971082004</TableCell>
                    <TableCell><span className="border inline-block px-2">5</span></TableCell>
                    <TableCell className="line-clamp-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam aperiam impedit dolorum quae culpa neque.</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>13:15 02/11/2024</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">1</TableCell>
                    <TableCell>+998971082004</TableCell>
                    <TableCell><span className={cn("border inline-block px-2 rounded-sm", )}>2</span></TableCell>
                    <TableCell className="line-clamp-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam aperiam impedit dolorum quae culpa neque.</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>13:15 02/11/2024</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">1</TableCell>
                    <TableCell>+998971082004</TableCell>
                    <TableCell><span className="border inline-block px-2">3</span></TableCell>
                    <TableCell className="line-clamp-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam aperiam impedit dolorum quae culpa neque.</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>13:15 02/11/2024</TableCell>
                </TableRow>
            </TableBody>
        </Table>

    );
};

export default TableReilway;
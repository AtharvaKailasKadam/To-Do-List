import { useEffect, useState } from "react";

import { MdDateRange } from "react-icons/md";
import { IoIosTime } from "react-icons/io";


export const TodoDateandTime = () =>
    {

        const[DateTime, setDateTime] = useState("");

    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    useEffect(() => {
        setInterval(() => {
        const now = new Date();
        const formattedTime = now.toLocaleTimeString();
        setDateTime(`${formattedTime}`)
        }, 1000)
    });

        return(
            <h2 className="todo-TimeandDate">
                {<MdDateRange />}{formattedDate} - {<IoIosTime />}{DateTime}
            </h2>
        )
    }
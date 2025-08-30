import { GiCheckMark } from "react-icons/gi";
import { MdDeleteForever } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { IoIosTime } from "react-icons/io";





import { useState } from "react";
import "./ToDo.css";

export const ToDo = () =>
{
    const [InputValue, setInputValue] = useState("");

    const [TextTrackList, setTextTrackList] = useState([]);

    const[DateTime, setDateTime] = useState("");

    const handleInputChange = (value) =>
    {
        setInputValue(value);
    }

    const handleFormSubmit = (event) =>
    {
        event.preventDefault();
        if(!InputValue) return;

        if(TextTrackList.includes(InputValue))
            {
                setInputValue("");
                return;
            }

        setTextTrackList((previous) => [...previous, InputValue]);

        setInputValue("");
    }

    const now = new Date();
    const formattedDate = now.toLocaleDateString();

    setInterval(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString();
    setDateTime(`${formattedTime}`)

    }, 1000)

    return <section className="todo-container">
        <header>
            <h1 className="todo-header">To Do List</h1>
            <h2 className="todo-TimeandDate">
                {<MdDateRange />}{formattedDate} - {<IoIosTime />}{DateTime}
            </h2>
        </header>
    <section className="form">
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className = "todo-input" autoComplete="off" value = {InputValue}placeholder = "Enter a Task"  onChange = {(event) => handleInputChange(event.target.value)} />
                </div>
                <div>
                    <button type="submit" className = "todo-button">
                        Add Task
                    </button>
                </div>
            </form>
            <section className="myList">
                <ul>
                {
                    TextTrackList.map((curTask, index) =>
                    {
                        return(
                        <li key = {index}className="todo-items">
                            <span>{curTask}</span>
                            <div className="todo-buttons">
                                <button className="todo-check">
                                    <GiCheckMark />
                                </button>
                                <button className="todo-delete">
                                    <MdDeleteForever />
                                </button>
                            </div>
                        </li>
                        );
                    })
                }
                </ul>
            </section>
        </section>
    </section>
}
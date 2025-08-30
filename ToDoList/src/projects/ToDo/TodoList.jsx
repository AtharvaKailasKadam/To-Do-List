import { GiCheckMark } from "react-icons/gi";
import { MdDeleteForever } from "react-icons/md";


export const TodoList = ({data, checked, onHandleCheckTodo, onHandleDeleteTodo}) =>


{
    return(
        <li className="todo-items">
            <span className = {checked ? "CheckList" : "notCheckList"}>{data}</span>
            <div className="todo-buttons">
                <button className="todo-check" onClick = {() => onHandleCheckTodo(data)}>
                    <GiCheckMark />
                </button>
                <button className="todo-delete" onClick={() => onHandleDeleteTodo(data)}>
                    <MdDeleteForever />
                </button>
                </div>
        </li>
    )
}
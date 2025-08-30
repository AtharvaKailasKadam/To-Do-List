import { TodoForm } from "./TodoForm";
import { TodoDateandTime } from "./ToDoDateandTime";
import { TodoList } from "./TodoList";

import { useState } from "react";
import "./ToDo.css";

const todoKey = "reactTodo";

export const ToDo = () =>
{
    const [TextTrackList, setTextTrackList] = useState(() =>
{
    const rawTodos = localStorage.getItem(todoKey);
    if(!rawTodos) return [];
    return JSON.parse(rawTodos);
});

    const handleFormSubmit = (InputValue) =>
    {
        const { id, content, checked } = InputValue;
        if(!content) return;
        const ifTodoContentMatched = TextTrackList.find((curTask) => curTask.content === content);
        if (ifTodoContentMatched) return;
        setTextTrackList((previous) => [...previous, {id:id, content:content, checked:checked}]);
    };

    localStorage.setItem(todoKey, JSON.stringify(TextTrackList));

    const handleDeleteTodo = (InputValue) =>
    {
        const updatedTask = TextTrackList.filter((curTask) => curTask.content !== InputValue);
        setTextTrackList(updatedTask);
    }

    const handleCheckTodo = (InputValue) =>
    {
        const updatedTask = TextTrackList.map((curTask) => curTask.content === InputValue ? {...curTask, checked: !curTask.checked} : curTask);
        setTextTrackList(updatedTask);
    }

    const handleClearTodo =() =>
    {
        setTextTrackList([]);
    }

    return <section className="todo-container">
        <header>
            <h1 className="todo-header">To Do List</h1>
            <TodoDateandTime />
        </header>
    <TodoForm onAddTodo = {handleFormSubmit}/>
        <section className="myList">
                <ul>
                {
                    TextTrackList.map((curTask) =>
                    {
                        return(
                            <TodoList key ={curTask.id} data = {curTask.content} checked = {curTask.checked} onHandleDeleteTodo = {handleDeleteTodo} onHandleCheckTodo = {handleCheckTodo} />
                        );
                    })
                }
                </ul>
        </section>
        <section>
            <div className = "ClearButtonDiv">
                <button className = "todo-ClearButton" onClick={handleClearTodo}>
                    CLEAR ALL..!
                </button>
            </div>
        </section>
    </section>
}
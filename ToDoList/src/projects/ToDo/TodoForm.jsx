import { useState } from "react";

export const TodoForm = ({onAddTodo}) =>
{
    const [InputValue, setInputValue] = useState({});

    const handleInputChange = (value) =>
        {
            setInputValue({id:value, content:value, checked:false});
        }

    const handleFormSubmit = (event) =>
        {
            event.preventDefault();
            onAddTodo(InputValue);
            setInputValue({id: "", content: "", checked: false});
        }
    return(
        <section className="form">
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className = "todo-input" autoComplete="off" value = {InputValue.content}placeholder = "Enter a Task"  onChange = {(event) => handleInputChange(event.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className = "todo-button">
                            Add Task
                        </button>
                    </div>
                </form>
        </section>
    )
}
// Only Form File.
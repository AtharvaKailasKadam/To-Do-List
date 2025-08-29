import "./ToDo.css";

export const ToDo = () =>
{
    return <section className="todo-container">
        <header>
            <h1 className="todo-header">To Do List</h1>
        </header>
        <section className = "form">
            <form>
                <div>
                    <input type="text" className = "todo-input" autoComplete="off" />
                </div>
                <div>
                    <button type="submit" className = "todo-button">
                        Add Task
                    </button>
                </div>
            </form>
        </section>
    </section>
}
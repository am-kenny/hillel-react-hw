import {useState} from "react";
import List from "./List.jsx";

const TodosBlock = () => {
    const [title, setTitle] = useState("");
    const [todos, setTodos] = useState([]);

    const handleSubmitForm = (event) => {
        event.preventDefault();

        const newTodoItem = {
            id: new Date().getTime(),
            title
        }

        const updatedTodos = [...todos, newTodoItem];
        setTodos(updatedTodos);
        setTitle("")
    }

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleDeleteTodo = (id) => {
        const filteredItems = todos.filter(todo => todo.id !== id);

        setTodos(filteredItems)
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmitForm}>
                    <input type="text" placeholder='Enter todo name' value={title} onChange={handleChangeTitle}/>
                    <button type='submit'>Create todo</button>
                </form>
                <div>
                    <List todos={todos} onDelete={handleDeleteTodo}/>
                </div>
            </div>
        </div>
    )
}

export default TodosBlock;
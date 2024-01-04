const Todo = ({todo, onDelete}) => {

    const onDeleteItem = () => {
        onDelete(todo.id)
    }

    return (
        <li>{todo.title}
            <button onClick={onDeleteItem}>Delete</button>
        </li>
    )
}

export default Todo;
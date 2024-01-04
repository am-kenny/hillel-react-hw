import Todo from "./Todo.jsx";

const List = ({todos, onDelete}) => {
    return (
        <ul>
            {todos.map((todo) => <Todo key={todo.id} todo={todo} onDelete={onDelete}/>)}
        </ul>
    )
}
export default List;
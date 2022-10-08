import AddTodo from "./components/AddTodo"
import TodoImplement from "./components/TodoImplement"

const Todo = () => {
    return (
        <div className="todo-container">
            <div></div>
            <AddTodo></AddTodo>
            <TodoImplement></TodoImplement>
        </div>
    )
}

export default Todo
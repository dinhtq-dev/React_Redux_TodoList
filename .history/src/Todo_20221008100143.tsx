import AddTodo from "./components/AddTodo"
import TodoInprogress from "./components/TodoInprogress"

const Todo = () => {
    return (
        <div className="todo-container">
            <AddTodo></AddTodo>
            <TodoInprogress></TodoInprogress>
            <div className="custom-bg"></div>
        </div>
    )
}

export default Todo
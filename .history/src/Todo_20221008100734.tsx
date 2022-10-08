import AddTodo from "./components/AddTodo"
import TodoInprogress from "./components/TodoInprogress"

const Todo = () => {
    return (
        <div className="todo-container">
            <h1>TODO LIST</h1>
            <div className="custom-bg"></div>
            <AddTodo></AddTodo>
            <TodoInprogress></TodoInprogress>
        </div>
    )
}

export default Todo
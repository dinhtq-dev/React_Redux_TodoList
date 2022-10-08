import AddTodo from "./components/AddTodo"
import TodoInprogress from "./components/TodoInprogress"

const Todo = () => {
    return (
        <div>
            <header><h1>Todo List</h1></header>
            <div className="custom-bg"></div>
            <AddTodo></AddTodo>
            <div>
                <TodoInprogress></TodoInprogress>
                <TodoInprogress></TodoInprogress>
            </div>
        </div>
    )
}

export default Todo
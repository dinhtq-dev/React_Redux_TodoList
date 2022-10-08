import AddTodo from "./components/AddTodo"
import TodoInprogress from "./components/TodoInprogress"

const Todo = () => {
    return (
        <>
            <h1>Todo List</h1>
            <div className="todo-container">
                <div className="custom-bg"></div>
                <AddTodo></AddTodo>
                <div>
                    <TodoInprogress></TodoInprogress>
                    <TodoInprogress></TodoInprogress>
                </div>
            </div>
        </>
    )
}

export default Todo
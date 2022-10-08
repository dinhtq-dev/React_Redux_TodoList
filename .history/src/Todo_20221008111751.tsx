import AddTodo, { ITodo } from "./components/AddTodo"
import TodoInprogress from "./components/TodoInprogress"

const Todo = () => {
    const addListTodo = (todo: ITodo) => {
        console.log(todo)
    }
    return (
        <div className="todo-container">
            <div className="header">
                <h1>Todo List</h1>
            </div>
            <div className="custom-bg"></div>
            <AddTodo addListTodo={addListTodo}></AddTodo>
            <div className="todo-inprogress">
                <h1>Inprogress</h1>
                <TodoInprogress></TodoInprogress>
            </div>
            <div className="todo-done">
                <h1>Done</h1>
                <TodoInprogress></TodoInprogress>
            </div>
        </div>
    )
}

export default Todo
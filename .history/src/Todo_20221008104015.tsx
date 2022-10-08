import AddTodo from "./components/AddTodo"
import TodoInprogress from "./components/TodoInprogress"

const Todo = () => {
    return (
        <div className="todo-container">
            <div className="header">
            <form >
            <input type="text"  placeholder="Add Todo"/>
            <input type="button" value="Add" />
        </form>
            </div>
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
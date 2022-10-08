import AddTodo from "./components/AddTodo"
import TodoInprogress from "./components/TodoInprogress"

const Todo = () => {
    return (
        <div className="todo-container">
            <div className="header">
            <form className={styles.container}>
            <input type="text" className={styles.addTodo} placeholder="Add Todo"/>
            <input type="button" value="Add" className={styles.btnAddTodo}/>
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
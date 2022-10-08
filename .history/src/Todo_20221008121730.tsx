import { useState } from "react"
import AddTodo, { ITodo } from "./components/AddTodo"
import TodoInprogress from "./components/TodoInprogress"

const Todo = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([])
    const addListTodo = (todo: ITodo) => {
        setTodoList([...todoList, todo])
    }
    const onDeleteTodo = (todo: ITodo) => {
        const newTodoList = todoList.filter((item)=>item.id !== todo.id);
        setTodoList(newTodoList);
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
                <TodoInprogress todoList={todoList} onDeleteTodo={onDeleteTodo}></TodoInprogress>
            </div>
            <div className="todo-done">
                <h1>Done</h1>
                {/* <TodoInprogress></TodoInprogress> */}
            </div>
        </div>
    )
}

export default Todo
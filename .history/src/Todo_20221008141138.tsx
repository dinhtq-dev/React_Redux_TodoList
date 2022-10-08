import { useState } from "react"
import AddTodo, { ITodo } from "./components/AddTodo"
import TodoInprogress from "./components/TodoInprogress"

const Todo = () => {
    const [todoList, setTodoList] = useState<ITodo[]>([]);
    const [currentTodo, setCurrentTodo] = useState<ITodo | null>(null);
    const addListTodo = (todo: ITodo) => {
        setTodoList([...todoList, todo]);
    }
    const onDeleteTodo = (todo: ITodo) => {
        const newTodoList = todoList.filter((item)=>item.id !== todo.id);
        setTodoList(newTodoList);
    }
    const onEditTodoItem = (todo: ITodo) => {
        setCurrentTodo(todo)
    };
    const changeStatusTodo = (todo: ITodo) => {
        setTodoList((prev)=>[
            ...prev.filter(item=>item.id !== todo.id),
            {
                ...todo,
                status: true
            }
        ])
    }
    const editTodo = (todo: ITodo) => {
        setCurrentTodo( prev => {
            if(prev) {
                return {
                    ...prev,
                    name: todo.name
                } || null
            }
        })
    }
    const todoListInprogress = todoList.filter(item=>!item.status)
    const todoListDone = todoList.filter(item=>item.status)
    return (
        <div className="todo-container">
            <div className="header">
                <h1>Todo List</h1>
            </div>
            <div className="custom-bg"></div>
            <AddTodo addListTodo={addListTodo} currentTodo={currentTodo} editTodo={editTodo}></AddTodo>
            <div className="todo-inprogress">
                <h1>Inprogress</h1>
                <TodoInprogress 
                    todoList={todoListInprogress} 
                    onDeleteTodo={onDeleteTodo} 
                    changeStatusTodo={changeStatusTodo}
                    onEditTodoItem={onEditTodoItem}
                />
            </div>
            <div className="todo-done">
                <h1>Done</h1>
                <TodoInprogress todoList={todoListDone} onDeleteTodo={onDeleteTodo} onEditTodoItem={onEditTodoItem}></TodoInprogress>
            </div>
        </div>
    )
}

export default Todo
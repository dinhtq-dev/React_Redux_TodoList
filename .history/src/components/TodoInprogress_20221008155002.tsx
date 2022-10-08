import styles from '../css/todoInprogress.module.css'
import { ITodo } from './AddTodo';

interface TodoInprogressProps {
    todoList: ITodo[],
    onDeleteTodo: (todo: ITodo) => void,
    changeStatusTodo?: (todo: ITodo) => void,
    onEditTodoItem: (todo: ITodo) => void,
}
const TodoInprogress = (props: TodoInprogressProps) => {
    const { todoList, onDeleteTodo, changeStatusTodo, onEditTodoItem } = props;
    const handleEdit = (item: ITodo) => onEditTodoItem(item);
    const handleDelete = (item: ITodo) => onDeleteTodo(item);
    const handleCheckbox = (item: ITodo) => changeStatusTodo ? changeStatusTodo(item) : null;
    const todoSort = todoList.sort( (a, b) => {
        if(a > b) return 1;
        if(a < b) return -1;
        return 0
    })
    return (
        <div>
            {
                todoSort.map(item=>(
                   <div key={item.id} className={styles.container} >
                        <h1 className={`${item.status && styles.doneTodo}`}>{item.name}</h1>
                        <div>
                            {!item.status && <input type="checkbox" onChange={()=>handleCheckbox(item)}/>}
                            <button onClick={()=>handleEdit(item)}>edit</button>
                            <button onClick={()=>handleDelete(item)}>delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoInprogress;
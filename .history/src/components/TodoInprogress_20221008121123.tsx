import styles from '../css/todoInprogress.module.css'
import { ITodo } from './AddTodo';

interface TodoInprogressProps {
    todoList: ITodo[],
    onDeleteTodo: (todo: ITodo) => void
}
const TodoInprogress = (props: TodoInprogressProps) => {
    const { todoList, onDeleteTodo } = props;
    const handleEdit = (item: ITodo) => {}
    const handleDelete = (item: ITodo) => onDeleteTodo(item)
    return (
        <div>
            {
                todoList.map(item=>(
                   <div key={item.id} className={styles.container}>
                        <h1>{item.name}</h1>
                        <div>
                            <input type="checkbox" />
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
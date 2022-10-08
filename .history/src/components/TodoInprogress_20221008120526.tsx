import styles from '../css/todoInprogress.module.css'
import { ITodo } from './AddTodo';

interface TodoInprogressProps {
    todoList: ITodo[]
}
const TodoInprogress = (props: TodoInprogressProps) => {
    const { todoList} = props;
    const handleEdit = () => {}
    const handleDelete = () => {}
    return (
        <div>
            {
                todoList.map(item=>(
                   <div key={item.id} className={styles.container}>
                        <h1>{item.name}</h1>
                        <div>
                            <input type="checkbox" />
                            <button onClick={handleEdit}>edit</button>
                            <button onClick={handleDelete}>delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoInprogress;
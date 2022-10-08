import styles from '../css/todoInprogress.module.css'
import { ITodo } from './AddTodo';

interface TodoInprogressProps {
    todoList: ITodo[]
}
const TodoInprogress = (props: TodoInprogressProps) => {
    const { todoList} = props;
    return (
        <div className={styles.container}>
            {
                todoList.map(item=>(
                   <div key={item.id}>
                        <h1>Play game</h1>
                        <div>
                            <input type="checkbox" />
                            <button>edit</button>
                            <button>delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoInprogress;
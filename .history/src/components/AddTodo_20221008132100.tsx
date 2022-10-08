import { useState } from 'react';
import styles from '../css/addTodo.module.css'

export interface ITodo {
    name: string,
    id: number,
    status: boolean,
}
interface AddTodoProps {
    addListTodo:(todo: ITodo)=> void,
    addTodoRef: React.MutableRefObject<null>,
    currentTodo: ITodo|null
}
const AddTodo = (props: AddTodoProps) => {
    const {addListTodo, currentTodo} = props
    const [todoName, setTodoName] = useState<string>("") 
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoName(event.target.value)
    }
    const addTodo = () => todoName && addListTodo({id: new Date().getUTCMilliseconds(),name: todoName, status: false});
    
    return (
        <form className={styles.container}>
            <input type="text" className={styles.addTodo} placeholder="Add Todo" onChange={handleInputChange} value={currentTodo ? currentTodo.name : todoName}/>
            <input type="button" value="Add" className={styles.btnAddTodo} onClick={addTodo}/>
        </form>
    )
}

export default AddTodo;
import { useState } from 'react';
import styles from '../css/addTodo.module.css'
const AddTodo = () => {
    const [todoName, setTodoName] = useState<string>("") 
    return (
        <form className={styles.container}>
            <input type="text" className={styles.addTodo} placeholder="Add Todo"/>
            <input type="button" value="Add" className={styles.btnAddTodo}/>
        </form>
    )
}

export default AddTodo;
import { useState } from 'react';
import styles from '../css/addTodo.module.css'
const AddTodo = () => {
    const [todoName, setTodoName] = useState<string>("") 
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
    }
    return (
        <form className={styles.container}>
            <input type="text" className={styles.addTodo} placeholder="Add Todo" onChange={handleInputChange}/>
            <input type="button" value="Add" className={styles.btnAddTodo}/>
        </form>
    )
}

export default AddTodo;
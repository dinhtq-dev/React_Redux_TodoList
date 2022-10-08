import { useState } from 'react';
import styles from '../css/addTodo.module.css'

interface AddTodoProps {
    addListTodo:()=>{} 
}
const AddTodo = (props: AddTodoProps) => {
    const {AddTodoProps} = props
    const [todoName, setTodoName] = useState<string>("") 
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodoName(event.target.value)
    }
    const addTodo = () => {
        AddTodoProps()
    }
    return (
        <form className={styles.container}>
            <input type="text" className={styles.addTodo} placeholder="Add Todo" onChange={handleInputChange}/>
            <input type="button" value="Add" className={styles.btnAddTodo} onClick={addTodo}/>
        </form>
    )
}

export default AddTodo;
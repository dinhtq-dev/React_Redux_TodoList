import styles from '../css/addTodo.module.css'
const AddTodo = () => {
    return (
        <form className={styles.container}>
            <input type="text" className={styles.addTodo} placeholder="Todo"/>
            <input type="button" value="Add" className={styles.btnAddTodo}/>
        </form>
    )
}

export default AddTodo;
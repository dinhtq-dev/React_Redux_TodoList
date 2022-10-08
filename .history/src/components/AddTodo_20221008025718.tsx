import styles from '../css/addTodo.module.css'
const AddTodo = () => {
    return (
        <form>
            <input type="text" className={styles.addTodo}/>
            <input type="button" value="add" className={styles.btnAddTodo}/>
        </form>
    )
}

export default AddTodo;
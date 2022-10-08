import styles from '../css/addTodo.module.css'
const AddTodo = () => {
    return (
        <form className={styles.container}>
            <h1>dskjfdsklfj</h1>
            <input type="text" className={styles.addTodo} placeholder="Add Todo"/>
            <input type="button" value="Add" className={styles.btnAddTodo}/>
        </form>
    )
}

export default AddTodo;
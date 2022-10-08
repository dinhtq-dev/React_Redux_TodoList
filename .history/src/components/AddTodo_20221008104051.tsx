import styles from '../css/addTodo.module.css'
const AddTodo = () => {
    return (
        <>
        <h1>sdkljfdsk</h1>
        <form className={styles.container}>
            <input type="text" className={styles.addTodo} placeholder="Add Todo"/>
            <input type="button" value="Add" className={styles.btnAddTodo}/>
        </form>
        </>
    )
}

export default AddTodo;
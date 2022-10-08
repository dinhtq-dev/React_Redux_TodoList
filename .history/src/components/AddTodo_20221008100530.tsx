import styles from '../css/addTodo.module.css'
const AddTodo = () => {
    return (
        <form className='container'>
            <input type="text" className={styles.addTodo}/>
            <input type="button" value="Add" className={styles.btnAddTodo}/>
        </form>
    )
}

export default AddTodo;
import styles from '../css/addTodo.module.css'
const AddTodo = () => {
    return (
        <form>
            <input type="text" className={styles.addtodo}/>
            <input type="button" value="add"/>
        </form>
    )
}

export default AddTodo;
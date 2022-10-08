import styles from '../css/todoInprogress.module.css'

const TodoInprogress = () => {
    return (
        <div className={styles.container}>
            <h1>Play game</h1>
            <div>
                <input type="checkbox" />
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    )
}

export default TodoInprogress;
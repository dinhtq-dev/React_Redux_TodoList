import styles from '../css/todoInprogress.module.css'

const TodoInprogress = () => {
    return (
        <div className={styles.container}>
            <h1>di choi</h1>
            <div>
                <button>edit</button>
                <button>delete</button>
            </div>
        </div>
    )
}

export default TodoInprogress;
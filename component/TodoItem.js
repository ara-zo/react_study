import styles from "../styles/TodoItem.module.css"


const TodoItem = ({data, callBack}) => {
    return (
        <div className={`${styles.div1} ${styles.div2}`}>
            <input type={"checkBox"}/>
            {data.content}
            <button onClick={event => callBack(data.idx)} style={{float:"right"}}>delete</button>
        </div>
    )
}

export default TodoItem
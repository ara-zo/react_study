import TodoItem from "../../component/TodoItem";
import {useRef, useState} from "react";

const Todo = () => {

    const [todoList, setTodoList] = useState([]);

    const inputTodo = useRef(null);

    const todoItemCallBack = (idx) => {
        setTodoList(todoList.filter(todo => todo.idx !== idx))
    }

    const insertTodo = () => {

        const newData = {
            idx: todoList.length + 1,
            content: inputTodo.current.value
        }

        setTodoList([...todoList, newData])

        inputTodo.current.value = ""
    }

    return (
        <div>
            <div>Todo List</div>
            <input ref={inputTodo}/>
            <button onClick={insertTodo}>+</button>
            <hr/>
            {/*<TodoItem data={temp} callBack={todoItemCallBack}/>*/}
            {todoList.map(
                data => <TodoItem data={data} callBack={todoItemCallBack}/>
            )}
        </div>
    )
}

export default Todo
import { useState } from "react"
const TodoList = ({todoList, settodoList}) => {
    const [change, setChange] = useState(false)
    const handlecancel = id => {
       settodoList(todoList.map((todo) => {
        if(id === todo.id) {
            return{
                ...todo,
                completed: !todo.completed
            }
        }
        return todo;
       }))
    }
    const handleTrash = id => {
        const newArray = todoList.filter((todo) => todo.id !== id)
        settodoList(newArray)
    }
    return(<>
      <div className="todoList">
        <div className="todos">
             {todoList.map((todo,index)=>(
                <div key={index} className={todo.completed ? 'todo completed':'todo'}>
                    <div className="todoText">
                        <span>{todo.text}</span>
                    </div>
                    <div className="icons">
                    <button onClick={() => handlecancel(todo.id)}>
                        <i className="fas fa-check"></i>
                    </button>
                    <button onClick={() => handleTrash(todo.id)}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
                </div>
             ))}
        </div>
      </div>
    </>)
}

export default TodoList
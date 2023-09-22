
const TodoList = ({todoList, settodoList}) => {
    const handleTrash = () => {

    }
    return(<>
      <div className="todoList">
        <div className="todos">
             {todoList.map((todo,index)=>(
                <div className="todo">
                    <div className="todoText">
                        <span>{todo.text}</span>
                    </div>
                    <div className="icons">
                    <button>
                        <i className="fas fa-check"></i>
                    </button>
                    <button onClick={handleTrash}>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
                </div>
             ))}
            {/* <div className="todo">
                <div className="todoText">
                    <span>プログラミング</span>
                </div>
                <div className="icons">
                    <button>
                        <i className="fas fa-check"></i>
                    </button>
                    <button>
                        <i className="fas fa-trash"></i>
                    </button>
                </div>
            </div>            */}
        </div>
      </div>
    </>)
}

export default TodoList
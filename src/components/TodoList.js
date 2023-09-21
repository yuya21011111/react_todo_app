
const TodoList = () => {
    return(<>
      <div className="todoList">
        <div className="todos">
            <div className="todo">
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
            </div>           
        </div>
      </div>
    </>)
}

export default TodoList
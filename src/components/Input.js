import { useRef } from "react"
const Input = ({todoList,settodoList}) => {
     const ref = useRef('')
    const handleSubmit = e => {
        e.preventDefault()
       
        settodoList([
            ...todoList,
            {
                text: ref.current.value
            }
        ])
    }
    console.log(todoList)
    return(<>
      <div className="inputForm">
        <form onSubmit={handleSubmit}>
            <input type="text" ref={ref} />
            <button>
                <i className="fas fa-plus-square"></i>
            </button>
        </form>
      </div>
    </>)
}

export default Input
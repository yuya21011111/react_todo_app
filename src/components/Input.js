import { useRef } from "react"
const Input = ({todoList,settodoList}) => {
     const ref = useRef()
    const handleSubmit = e => {
        e.preventDefault()
       if((ref.current.value ?? '').trim() !== ''){
        settodoList([
            ...todoList,
            {
                id: todoList.length,
                text: ref.current.value,
                completed: false
            }
        ])
        ref.current.value　 = ""
       }else {
        return
       }
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
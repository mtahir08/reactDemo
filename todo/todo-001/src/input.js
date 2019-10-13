import React, { useState } from 'react';

const Input = (props) => {
    const [todo, setTodo] = useState("")

    return <div>
        <input
            type="text"
            onChange={(event) => { setTodo(event.target.value) }}
            value={todo}
        />
        <button onClick={() => {
            if (todo.length) {
                props.addTodo(todo)
                setTodo("")
            }
        }}> Add </button>
    </div >
}

export default Input
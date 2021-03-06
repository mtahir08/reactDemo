import React, { useState, useEffect } from 'react';
import './index.css'
import { styles } from './style'
const Input = (props) => {
    const [todo, setTodo] = useState("")
    useEffect(() => {
        if (props.edit) {
            setTodo(props.edit)
        }
    }, [props.edit])

    return <div>
        <input
            type="text"
            onChange={(event) => { setTodo(event.target.value) }}
            value={todo}
            // className="input"
            style={styles.input}
        />
        <button onClick={() => {
            if (todo.length) {
                if (props.edit) {
                    props.updateTodo(todo)
                    setTodo("")
                } else {
                    props.addTodo(todo)
                    setTodo("")
                }
            }
        }}> {props.edit ? "Update" : "Add"} </button>
    </div >
}

export default Input
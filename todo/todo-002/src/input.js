import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import './index.css'
import { styles } from './style'
import TodoActions from './store/Actions/index';

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // Add: (obj) => dispatch(TodoActions.Add(obj))
        Add: (obj) => dispatch({ type: 'ADD', payload: obj })
    }
}

const Input = (props) => {
    // console.log(props);
    const [todo, setTodo] = useState("")
    // useEffect(() => {
    //     if (props.edit) {
    //         setTodo(props.edit)
    //     }
    // }, [props.edit])

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
                props.Add({
                    id: parseInt(Math.random() * 10000),
                    todo
                })
            }
        }}> {props.edit ? "Update" : "Add"} </button>
    </div >
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
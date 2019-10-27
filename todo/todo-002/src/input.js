import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import './index.css'
import { styles } from './style'
import TodoActions from './store/Actions/index';

function mapStateToProps(state) {
    return {
        editingItem: state.editingItem
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // Add: (obj) => dispatch(TodoActions.Add(obj))
        Add: (obj) => dispatch({ type: 'ADD', payload: obj }),
        // update: (obj) => dispatch(TodoActions.update(obj))
        Update: (obj) => dispatch({ type: 'UPDATE', payload: obj })

    }
}

const Input = (props) => {
    // console.log(props);
    const [todo, setTodo] = useState("")
    useEffect(() => {
        console.log(props.editingItem);
        if (props.editingItem) {
            setTodo(props.editingItem.name)
        }
    }, [props.editingItem])

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
                if (props.editingItem) {
                    props.Update({
                        ...props.editingItem,
                        name: todo
                    })
                } else {
                    props.Add({
                        id: parseInt(Math.random() * 10000),
                        name: todo
                    })
                }
            }
        }}> {props.editingItem ? "Update" : "Add"} </button>
    </div >
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
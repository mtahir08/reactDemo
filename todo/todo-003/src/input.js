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
        Add: (obj) => dispatch(TodoActions.Add(obj)),
        Update: (obj) => dispatch(TodoActions.Update(obj))
    }
}

const Input = (props) => {
    // console.log(props);
    const [todo, setTodo] = useState("")
    useEffect(() => {
        console.log(props.editingItem);
        if (props.editingItem) {
            setTodo(props.editingItem.text)
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
                        text: todo
                    })
                } else {
                    props.Add({ text: todo })
                }
            }
        }}> {props.editingItem ? "Update" : "Add"} </button>
    </div >
}

export default connect(mapStateToProps, mapDispatchToProps)(Input)
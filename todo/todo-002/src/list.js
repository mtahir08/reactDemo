import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import TodoActions from './store/Actions/index';


function mapStateToProps(state) {
    // console.log(state)
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        delete: (id) => {
            return dispatch(TodoActions.Delete(id))
        },
        update: (obj) => dispatch(TodoActions.update(obj))
    }
}


const List = (props) => {
    console.log(props);
    const [todos, setTodos] = useState([])

    // componentWillReceiveProps
    //static getDerivedStateFromProps
    useEffect(() => {
        let items = [...props.items]
        if (items.length) {
            items = items.map((item, i) => {
                return ({
                    ...item,
                    class: parseInt(Math.random() * 10)

                })
            })
        }
        setTodos(items)

    }, [props.items])

    let rows = todos.map((item, i) => (
        <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.class}</td>
            <td>
                <button onClick={() => { props.editTodo(item.id) }}>Edit</button>
                <button onClick={() => { props.deleteTodo(item.id) }}>Delete</button>
            </td>
        </tr>
    ));

    return <table>
        <thead>
            <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Class</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

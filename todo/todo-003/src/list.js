import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import TodoActions from './store/Actions/index';


function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        get: () => dispatch(TodoActions.Get()),
        delete: (id) => dispatch(TodoActions.Delete(id)),
        edit: (obj) => dispatch(TodoActions.Edit(obj)),
    }
}


const List = (props) => {

    useEffect(() => {
        props.get();
    }, [])

    let rows = props.todos.map((item, i) => (
        <tr key={i}>
            <td>{(i + 1)}</td>
            <td>{item.text}</td>
            <td>
                <button onClick={() => { props.edit(item) }}>Edit</button>
                <button onClick={() => { props.delete(item._id) }}>Delete</button>
            </td>
        </tr>
    ));

    return <table>
        <thead>
            <tr>
                <th>S.no</th>
                <th>Name</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

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
        // delete: (id) => {
        //     return dispatch(TodoActions.Delete(id))
        // },
        delete: (id) => {
            return dispatch({ type: 'DELETE', payload: id })
        },
        // edit: (obj) => dispatch(TodoActions.Edit(obj))
        edit: (obj) => dispatch({ type: 'EDIT', payload: obj })
    }
}


const List = (props) => {
    let rows = props.todos.map((item, i) => (
        <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>
                <button onClick={() => { props.edit(item) }}>Edit</button>
                <button onClick={() => { props.delete(item.id) }}>Delete</button>
            </td>
        </tr>
    ));

    return <table>
        <thead>
            <tr>
                <th>S.no</th>
                <th>Name</th>
                {/* <th>Class</th> */}
                <th></th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

export default connect(mapStateToProps, mapDispatchToProps)(List);

import React, { Component } from 'react';
import { connect } from 'react-redux';

import StoreAction from '../store/actions/action';
import AddTodo from '../components/add-todo/addToto';
import ListTodo from '../components/list-todo/listTodo';


function mapStateToProps(state) {
    console.log(state)
    return {
        list: state.todoReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        add: (value) => {
            // var num = +document.getElementById("num").value;
            return dispatch({ type: StoreAction.add(), payload: value })
        },
        complete: (index, value, flag) => dispatch({ type: StoreAction.completed(), payload: { index: index, value: value, flag: flag } }),
        delete: (index) => dispatch({ type: StoreAction.delete(), payload: index })
    }
}

class Container extends Component {


    add(value) {
        this.props.add(value);
    }
    complete(index, value, flag) {
        this.props.complete(index, value, flag);
    }
    deletee(i) {
        this.props.delete(i);
    }
    render() {
        return (
            <div>
                <AddTodo addTodoList={this.add.bind(this)} />
                <ListTodo list={this.props.list} completed={this.complete.bind(this)} deleted={this.deletee.bind(this)} />
            </div>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);
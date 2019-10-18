import React, { useState } from 'react';

import List from './list';
import Input from './input';

const Main = () => {
    const [todos, setTodos] = useState([])
    const [todo, setTodo] = useState({})
    const [editingIndex, setEditingIndex] = useState(-1)
    const addEventHandler = (todo) => {
        setTodos([...todos, { name: todo, id: (todos.length + 1) }])
        // setTodos(items => {
        //     return [...items, {name:todo}]
        // })
    }

    const updateEventHandler = (item) => {
        const newTodos = [...todos]
        todo.name = item
        newTodos[editingIndex] = todo
        setTodos(newTodos)
        setTodo({})
        setEditingIndex(-1)
    }

    const deleteTodo = (id) => {
        //     // console.log(index, todos);
        //     // todos.filter((todo) => todo.id !== id)
        const index = todos.findIndex((item) => item.id === id)
        if (index > -1) {
            const newTodos = [...todos]
            newTodos.splice(index, 1);
            setTodos(newTodos)
            console.log(todos);
        }
    }

    const editTodo = (id) => {
        const index = todos.findIndex((item) => item.id === id)
        if (index > -1) {
            const item = todos[index]
            setTodo(item)
            setEditingIndex(index)
        }
    }

    return <div>
        <Input
            addTodo={addEventHandler}
            updateTodo={updateEventHandler}
            edit={todo.name}
        />
        <List
            items={todos}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
        />
    </div>
}

export default Main
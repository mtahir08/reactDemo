import React, { useState } from 'react';

import List from './list';
import Input from './input';

const Main = () => {
    const [todos, setTodos] = useState([])
    const addEventHandler = (todo) => {
        setTodos([...todos, { name: todo, id: (todos.length + 1) }])
        // setTodos(items => {
        //     return [...items, {name:todo}]
        // })
    }

    const deleteTodo = (id) => {
        //     // console.log(index, todos);
        //     // todos.filter((todo) => todo.id !== id)
        const index = todos.findIndex((todo) => todo.id === id)
        if (index > -1) {
            const newTodos = [...todos]
            newTodos.splice(index, 1);
            setTodos(newTodos)
            console.log(todos);
        }
    }

    return <div>
        <Input addTodo={addEventHandler} />
        <List items={todos} deleteTodo={deleteTodo} />
    </div>
}

export default Main
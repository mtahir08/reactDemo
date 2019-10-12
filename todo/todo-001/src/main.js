import React, { useState } from 'react';

import List from './list';
import Input from './input';

const Main = () => {
    const [todos, setTodos] = useState([])
    const addEventHandler = (todo) => {
        setTodos([...todos, todo])
        // setTodos(items => {
        //     return [...items, todo]
        // })
    }
    return <div>
        <Input addThis={addEventHandler} />
        <List items={todos} />
    </div>
}

export default Main
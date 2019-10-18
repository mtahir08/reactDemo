import React, { useEffect, useState } from 'react';

// const List = (props) => {
//     let list = props.items.map((item, i) => <li key={i}>{item}</li>)
//     return <ul>{list}</ul>
// }

const List = (props) => {
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
                    // name:item.name,
                    // age:item.age,
                    // class:item.class
                })
            })
        }
        setTodos(items)

    }, [props.items])

    // const deleteTodo = (index) => {
    //     // console.log(index, todos);
    //     // todos.filter((todo) => todo.id !== id)
    //     // const index = todos.findIndex((todo) => todo.id === id)

    //     const newTodos = [...todos]
    //     newTodos.splice(index, 1);
    //     setTodos(newTodos)
    //     console.log(todos);

    // }

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

export default List
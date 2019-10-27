
const TodoActions = {
    Add: (obj) => {
        console.log({ obj });
        return { type: 'ADD', payload: obj }
    },
    Update: (obj) => {
        return { type: 'UPDATE', payload: obj }
    },
    Delete: (id) => {
        return { type: 'DELETE', payload: id }
    },
    Edit: (obj) => {
        return { type: 'EDIT', payload: obj }
    },
}

export default TodoActions 
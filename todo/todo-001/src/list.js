import React from 'react';

// const List = (props) => {
//     let list = props.items.map((item, i) => <li key={i}>{item}</li>)
//     return <ul>{list}</ul>
// }
const List = (props) => {

    let rows = props.items.map((item, i) => (<tr key={i}><td>{i + 1}</td><td>{item.name}</td><td></td><td><button onClick={() => { }}>Edit</button><button onClick={() => { }}>Delete</button></td></tr>));
    return <table>
        <thead>
            <tr>
                <th>S.no</th>
                <th>Name</th>
                <th></th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
}

export default List
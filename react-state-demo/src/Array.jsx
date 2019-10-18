import React, { useState } from 'react';

// function Array() {
//     let [items, setItems] = useState([]);

//     const addItem = () => {
//         const newItems = [...items]
//         newItems.push(1)
//         console.log(newItems)
//         setItems(newItems)
//     }

//     const removeItem = () => {

//         const newItem = [...items];
//         newItem.pop();
//         setItems(newItem);

//         // setItems([...items].pop());
//     }

//     // const removeItem = () => {
//     //     const newItems = [...items]
//     //     newItems.pop()
//     //     console.log(newItems)
//     //     setItems(newItems)
//     // }
//     return (
//         <div>
//             <button onClick={addItem}>Add item</button>
//             <button onClick={removeItem}>Remove item</button>
//             <ul>
//                 {items.map((item, index) => {
//                     return <li key={index}>{item}</li>
//                 })}
// // Or you can this
// //{ items.map((item, index) => <li key={index}>{item}</li>) }
//             </ul>
//         </div >
//     );
// }


function Array() {
    let [items, setItems] = useState([]);

    const addItem = () => {
        const newItems = [...items]
        newItems.push({
            name: "Ahmed",
            age: 10,
            class: parseInt(Math.random() * 10)
        })
        console.log(newItems)
        setItems(newItems)
    }

    const removeItem = () => {
        const newItems = [...items]
        newItems.pop()
        console.log(newItems)
        setItems(newItems)
    }

    return (
        <div>
            <button onClick={addItem}>Add item</button>
            <button onClick={removeItem}>Remove item</button>
            <ul>
                {/* {items.map((item, index) => <li key={index}>{item}</li>)} */}
                {items.map((item, index) => <li key={index}>{item.name} - {item.age} - {item.class}</li>)}
            </ul>
        </div >
    );
}

export default Array;

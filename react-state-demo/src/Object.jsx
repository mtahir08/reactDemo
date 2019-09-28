import React, { useState } from 'react';

function ObjectState() {
    let [obj, setObj] = useState({ name: "", age: 0 });

    const updateObject = () => {

        const newObj = { ...obj }; // ref changed
        // const newObj = Object.assign({}, obj); // ref changed
        // const newObj = obj; // same ref
        newObj.name = "Tahir";
        newObj.class = 10;
        setObj(newObj);
    }

    return (
        <div>
            {obj.name} - {obj.age} - {obj.class} <br />
            <button onClick={updateObject}>Update Object</button>
        </div >
    );
}

export default ObjectState;

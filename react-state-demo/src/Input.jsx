import React, { useState } from 'react';

function InputBox() {
    let [name, setName] = useState("");

    return (
        <div>
            {console.log({ name })}
            <input
                type="text"
                value={name}
                name="Enter name"
                onChange={(event) => {
                    console.log("onChange", event.target.value);
                    setName(event.target.value)
                }}
            />
        </div >
    );
}

export default InputBox;

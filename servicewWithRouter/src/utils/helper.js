
function Signup(obj) {
    /**
     * @param fetch(url, {
     * method: 'GET' || 'POST' || 'PUT' || 'DELETE',
     * headers: {
     * 'Accept': 'application/json',
            'Content-Type': 'application/json',
     *  },
     * body: JSON.stringify(data)
     * })
     */
    return fetch(`https://requestb.in/15uhgna1`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj)
    })
       
}

// function captilize1(value) {
//     let firstChar = value.charAt(0);
//     let othersChar = value.slice(1);
//     return firstChar.toUpperCase() + othersChar.toLowerCase()
// }



export {
    Signup
}
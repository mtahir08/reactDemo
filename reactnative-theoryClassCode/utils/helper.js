
function captilize(value) {
    let firstChar = value.charAt(0);
    let othersChar = value.slice(1);
    return firstChar.toUpperCase() + othersChar.toLowerCase()
}

function captilize1(value) {
    let firstChar = value.charAt(0);
    let othersChar = value.slice(1);
    return firstChar.toUpperCase() + othersChar.toLowerCase()
}



export {
    captilize,
    captilize1

}
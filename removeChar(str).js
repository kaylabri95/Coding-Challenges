// remove the first and last characters of the string
function removeChar(str){
    const newStr = str.split('')
    newStr.shift()
    newStr.pop()
    return newStr.join('')
};
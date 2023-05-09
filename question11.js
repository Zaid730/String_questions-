// 11. program to find reverse of a string


function reverseString(str) {
    let reversed = "";
    for(let i = str.length -1; i>=0; i--){
        console.log(i, str[i])
        reversed += str[i]
    }
    return reversed;
}

console.log(reverseString('Hello'));


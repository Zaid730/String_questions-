// 2. program to copy one string to another string

function copyString(str) {
    let string = ""

    for(let i=0; i<str.length ; i++){
         string += str[i]
    }
    return string

}

console.log(copyString("MS Dhoni"))
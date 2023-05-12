// 13. program to reverse order of words in a given string

function reverseWords(string){
    reversedString = ""
    for(let i= string.length -1; i>=0; i--){
        if(string[i] === ""){
            reversedString += ""
        }else{
            reversedString += string[i]
        }
    }
    return reversedString 
}

console.log(reverseWords("Hello World"))
// 10. program to count total no. of words in a string

let string ="This is a string hello"

wordCount = 0

function length (string) {
   
    let count = 0

  for(let i=0; string[i]; i++){
    count++;
  }
  return count
}

  let strLength = length(string)
  
for(let i=0; i < strLength; i++){
    if(string[i] === ' '){
        wordCount++;
    }
   
}
wordCount++;

console.log(`Total no. of words are ${wordCount}`)

// output

// 5
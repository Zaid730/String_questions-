// 14. Program to find the first occurence of a character in a given string

function Occurence(first){
     let string = "hello world"
     let count = 0
  for(i=0; i<string.length;i++){
    if(string[i] === first){
        break;
    } 
    count++
  }
  return count
}

console.log(Occurence('e'))
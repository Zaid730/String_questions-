// 12. check wether a string is palindrome or not

function palindrome(str){
    reversedStr = ""
  for(let i=str.length-1; i>=0; i--){
        reversedStr += str[i]     
  }
      return reversedStr === str
}
console.log(palindrome("atta"))
 
// 9. program to count total numbers of vowels and consonants in a string

  function Counting(str){
    let vowels = ['a','e','i','o','u']
    let countVowels = 0
    let countConsonants = 0

    for(let i=0; i<str.length; i++){
        if(vowels.includes(str[i])){
            countVowels++
        }else{
            countConsonants++
        }
    }
    console.log(`vowels: ${countVowels}`)
    console.log(`consonants: ${countConsonants}`)
  }

  Counting("hello World")
// 8. program to find total number of alphabets, digits or special character in a string

function countChars(str){
    let alphabets = 0;
    let digits = 0;
    let special = 0;

    for(i=0; i<str.length;i++){
        let char = str[i]
        if(/[0-9]/.test(char)) {
            digits++
        }else if(/[a-zA-Z]/.test(char)){
            alphabets++
        }else{
            special++
        }
    }
    console.log(`digits: ${digits}`)
    console.log(`alphabets: ${alphabets}`)
    console.log(`special: ${special}`)
      
}


countChars('123H')
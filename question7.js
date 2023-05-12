// 7. program to toggle case each character of a string

  function toggling(str) {
    string = ""
     for(i=0;i<str.length; i++){
        if(str[i] === str[i].toUpperCase()){
            string += str[i].toLowerCase();
        }else{
            string += str[i].toUpperCase()
        }
     }
     return string
  }
  console.log(toggling('Hello World'))





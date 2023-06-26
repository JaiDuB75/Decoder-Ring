// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  //Add an alphabet for the cipher. 
  const alphabet = ['a','b','c','d','e','f','g','h','i',
                    'j','k','l','m','n','o','p','q','r',
                    's','t','u','v','w','x','y','z'];
   
  function caesar(input, shift, encode = true) {
    // your solution code here
    let index; 
    let result = "";

    //Error Handling 
    if (shift === 0){
      return false; 
    }
    if (shift > 25){
      return false; 
    }
    if (shift < -25){
      return false; 
    }
    //Encoding
    if (encode){
      //Loop through the input
    for(let currentLetter = 0; currentLetter < input.length; currentLetter++){
      index = alphabet.findIndex((cipherLetter) => cipherLetter === input[currentLetter].toLowerCase());
      if(index === -1){
        result += input[currentLetter];
      }else if(index + shift > 25){
        result += alphabet[index + shift - 26];
      }else if(index + shift < 0){
        result += alphabet[index + shift + 26];
      }else{
        //Take the index and set the result variable to the shift
        result += alphabet[index+shift]; 
      } 
      //console.log(result);      
    }
    }else{
      for(let currentLetter = 0; currentLetter < input.length; currentLetter++){
        index = alphabet.findIndex((cipherLetter) => cipherLetter === input[currentLetter].toLowerCase());
        if(index === -1){
          result += input[currentLetter]; 
        }else if(index - shift > 25){
          result += alphabet[index - shift - 26];
        }else if(index - shift < 0){
          result += alphabet[index - shift + 26]; 
        }else{
          result += alphabet[index - shift]; 
        }
      }
    }

    //console.log(result); 
    return result;  
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

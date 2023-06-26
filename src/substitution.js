// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
    const plaintext = ['a','b','c','d','e','f','g','h','i',
    'j','k','l','m','n','o','p','q','r',
    's','t','u','v','w','x','y','z'];

  //Repeating Character function
  function isRepeating(alphabet){
    for(let currentLetter = 0; currentLetter < alphabet.length; currentLetter++){
      letter1 = alphabet[currentLetter];
      letter2 = alphabet[currentLetter+1];
      if(letter1 === letter2){
        return true; 
      }
    }
  }

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //error handling 
    if(alphabet === undefined){
      return false;
    } else if(alphabet.length != 26){
      return false; 
    }

    //if(isRepeating(alphabet)){
    //  return false; 
    //}

    //console.log(`This is the length of the alphabet: ${alphabet.length}`)

    let result = "";
    let alphabetArray = alphabet.split('');
    //console.log(alphabetArray);

    const repeated = alphabetArray.filter(
      (item, index, self) => self.indexOf(item) === index);
    if (repeated.length !== alphabet.length) return false;

    if (encode){
      //Encoding
      for(let currentLetter = 0; currentLetter < input.length; currentLetter++){
        let plaintextIndex = plaintext.findIndex((letter) => letter === input[currentLetter].toLowerCase());
        let alphabetLetter = alphabetArray.find((letter) => letter === alphabetArray[plaintextIndex]);
        if(plaintextIndex === -1){
          result += input[currentLetter];
        }else{
          result += alphabetLetter; 
        }
        //console.log(`This is the plaintext alphabet index: ${plaintextIndex}`);
        //console.log(`This is the ciphertext alphabet letter: ${alphabetLetter}`);
      }
    }else{
      //Decoding 
      for(let currentLetter = 0; currentLetter < input.length; currentLetter++){
        let alphabetIndex = alphabetArray.findIndex((letter) => letter === input[currentLetter].toLowerCase());
        //console.log(`This is the ciphertext alphabet index: ${alphabetIndex}`);
        let plaintextLetter = plaintext.find((letter) => letter === plaintext[alphabetIndex]);
        //console.log(`This is the plaintext alphabet letter: ${plaintextLetter}`);
        if(alphabetIndex === -1){
          result += input[currentLetter];
        }else{
          result += plaintextLetter; 
        }
      }
    }
    //console.log(result); 
    return result; 
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

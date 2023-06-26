// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const cipher = [
    {letter : "a", value : 11}, {letter : "b", value : 21}, {letter : "c", value : 31}, {letter : "d", value : 41}, {letter : "e", value : 51}, 
    {letter : "f", value : 12}, {letter : "g", value : 22}, {letter : "h", value : 32}, {letter : "i", value : 42}, {letter : "j", value : 42}, {letter : "k", value : 52},
    {letter : "l", value : 13}, {letter : "m", value : 23}, {letter : "n", value : 33}, {letter : "o", value : 43}, {letter : "p", value : 53},
    {letter : "q", value : 14}, {letter : "r", value : 24}, {letter : "s", value : 34}, {letter : "t", value : 44}, {letter : "u", value : 54},
    {letter : "v", value : 15}, {letter : "w", value : 25}, {letter : "x", value : 35}, {letter : "y", value : 45}, {letter : "z", value : 55},
];

const decodeCipher = [
  {letter : "a", value : 11}, {letter : "b", value : 21}, {letter : "c", value : 31}, {letter : "d", value : 41}, {letter : "e", value : 51}, 
  {letter : "f", value : 12}, {letter : "g", value : 22}, {letter : "h", value : 32}, {letter : "(i/j)", value : 42}, {letter : "k", value : 52},
  {letter : "l", value : 13}, {letter : "m", value : 23}, {letter : "n", value : 33}, {letter : "o", value : 43}, {letter : "p", value : 53},
  {letter : "q", value : 14}, {letter : "r", value : 24}, {letter : "s", value : 34}, {letter : "t", value : 44}, {letter : "u", value : 54},
  {letter : "v", value : 15}, {letter : "w", value : 25}, {letter : "x", value : 35}, {letter : "y", value : 45}, {letter : "z", value : 55},
];


  function polybius(input, encode = true) {
    // your solution code here

    let inputArray = input.toLowerCase().split(''); 
    let messageArray = [];

    //console.log(inputArray); 
    if(encode){
      inputArray.forEach((inputLetter) => {
        const found = cipher.find((cipherLetter) => cipherLetter.letter === inputLetter);
        if(found){
          messageArray.push(found.value); 
        } else{
          messageArray.push(inputLetter);
        }
      });
      console.log(messageArray.toString().replaceAll(',', ''));
      return messageArray.toString().replaceAll(',', '');
    }else{
      inputTrim = input.split(" ").join("");
      //console.log(inputTrim.length);
      if(inputTrim.length % 2 === 0){
        for(let currentNumber = 0; currentNumber < input.length; currentNumber++){
          if(input[currentNumber] === " "){
            messageArray.push(input[currentNumber]);
          }else{
            num1 = input[currentNumber];
            //console.log(`This is the 1st Number: ${num1}`);
            num2 = input[currentNumber + 1];
            //console.log(`This is the 2nd Number: ${num2}`);
            numResult = num1.concat(num2); 
            //console.log(`This is the result number: ${numResult}`);
            let foundLetter = decodeCipher.find((cipherLetter) => cipherLetter.value === parseInt(numResult));
            //console.log(`This is the found letter: ${foundLetter.letter}`);
            messageArray.push(foundLetter.letter); 
            currentNumber += 1; 
          }
        }
        console.log(messageArray.toString().replaceAll(',', ''));
        return messageArray.toString().replaceAll(',', '');
      }else{
        return false; 
      }

    }

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

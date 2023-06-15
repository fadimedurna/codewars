// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

// Solution:

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  text = text.toLowerCase();
  for (let i = 0; i < text.length; i++) {
    if (alphabet.indexOf(text[i]) !== -1) {
      //if the character is a letter
      result += alphabet.indexOf(text[i]) + 1 + " "; //add the index of the letter in the alphabet to the result string
    }
  }
  text = result.trim();
  return text;
}

//sample running:
console.log(alphabetPosition("The sunset sets at twelve o' clock.")); // "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20

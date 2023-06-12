// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not.
// Ignore numbers and punctuation.

//solution:
function isPangram(string) {
  //create an array of the alphabet
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  //create an array of the string
  let str = string.toLowerCase().split("");
  //create a new array to hold the letters that are in the string
  let arr = [];
  //loop through the string
  for (let i = 0; i < str.length; i++) {
    //if the letter is in the alphabet and not in the arr, push it to the arr
    if (alphabet.includes(str[i]) && !arr.includes(str[i])) {
      arr.push(str[i]);
    }
  }
  //if the arr is the same length as the alphabet, return true
  if (arr.length === alphabet.length) {
    return true;
  } else {
    return false;
  }
}

//sample runnings:
console.log(isPangram("The quick brown fox jumps over the lazy dog."));
console.log(isPangram("This is not a pangram."));

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//my solution:
function solution(str) {
  let arr = [];
  if (str.length % 2 !== 0) {
    //if string is odd, add an underscore to the end
    str += "_";
  }
  for (let i = 0; i < str.length; i += 2) {
    arr.push(str[i] + str[i + 1]);
  }
  return arr;
}

//sample runnings:
console.log(solution("abcdef"));
console.log(solution("abcdefg"));
console.log(solution("abcde"));

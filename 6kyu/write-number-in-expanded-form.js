// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

//solution:
function expandedForm(num) {
  let strNum = num.toString(); //convert num to a string for example: 70304 --> "70304"
  let expanded = ""; //create an empty string to store the expanded form of the number
  for (let i = 0; i < strNum.length; i++) {
    if (strNum[i] !== "0") {
      expanded += strNum[i] + "0".repeat(strNum.length - i - 1) + " + "; //repeat means: "0".repeat(3) --> "000"
    }
  }
  return expanded.slice(0, expanded.length - 3); //slice usage in here is: slice(start, end) --> start is 0, end is expanded.length - 3
}

//sample runnings:
console.log(expandedForm(12)); // '10 + 2'
console.log(expandedForm(42)); // '40 + 2'
console.log(expandedForm(70304)); // '70000 + 300 + 4'
console.log(expandedForm(9000000)); // '9000000'
console.log(expandedForm(9000001)); // '9000000 + 1'

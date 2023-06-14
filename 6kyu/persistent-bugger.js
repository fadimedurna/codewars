// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

//solution:
function persistence(num) {
  //code me
  let count = 0;
  while (num.toString().length > 1) {
    num = num
      .toString() //convert num to a string example: 999 --> "999"
      .split("") //split the string into an array of single digits for example: "999" --> ["9", "9", "9"]
      .reduce((a, b) => a * b); //multiply the digits together for example: ["9", "9", "9"] --> 9 * 9 * 9 = 729
    count++;
  }
  return count;
}

//sample runnings:
console.log(persistence(39)); // 3
console.log(persistence(4)); // 0
console.log(persistence(25)); // 2
console.log(persistence(999)); // 4
console.log(persistence(444)); // 3

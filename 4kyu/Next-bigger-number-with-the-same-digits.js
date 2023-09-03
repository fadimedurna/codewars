// Create a function that takes a positive integer and returns the next bigger number that can be formed by
//rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

//solution:
function nextBigger(n) {
  let digits = n.toString().split("");
  let arrLen = digits.length;
  let i = arrLen - 1;
  let j = arrLen - 1;
  let temp = 0;

  while (i > 0 && digits[i] <= digits[i - 1]) i--;
  if (i <= 0) return -1;

  while (digits[j] <= digits[i - 1]) j--;
  temp = digits[i - 1];
  digits[i - 1] = digits[j];
  digits[j] = temp;

  j = arrLen - 1;
  while (i < j) {
    temp = digits[i];
    digits[i] = digits[j];
    digits[j] = temp;
    i++;
    j--;
  }

  return parseInt(digits.join(""));
}

//sample run:

console.log(nextBigger(12)); //21
console.log(nextBigger(513)); //531
console.log(nextBigger(153)); //315
console.log(nextBigger(2017)); //2071
console.log(nextBigger(111));

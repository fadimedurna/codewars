// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

// Good luck!

//solution:

function permutations(string) {
  let arr = string.split("");
  let result = [];
  let permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m.join(""));
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice(); //slice returns a shallow copy of the array
        let next = curr.splice(i, 1); //splice(i, 1) removes the element at index i and returns it as an array
        permute(curr.slice(), m.concat(next));
      }
    }
  };
  permute(arr);
  return [...new Set(result)]; //... new Set() removes duplicates from the array and returns a new array
}

//sample run:
console.log(permutations("")); // []
console.log(permutations("a")); // ['a']
console.log(permutations("ab")); // ['ab', 'ba']
console.log(permutations("abc")); // ['abc','acb','bac','bca','cab','cba']
console.log(permutations("aabb")); // ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

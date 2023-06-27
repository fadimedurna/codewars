// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

//solution:
function generateHashtag(str) {
  if (str.trim() === "") return false; //trim removes whitespace from both ends of a string
  let hashtag = "#";
  str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .forEach((word) => (hashtag += word));
  return hashtag.length > 140 ? false : hashtag;
}

//sample run:
console.log(generateHashtag("")); // false
console.log(generateHashtag(" ".repeat(200))); // false
console.log(generateHashtag("Do We have A Hashtag")); // "#DoWeHaveAHashtag"
console.log(generateHashtag("Codewars")); // "#Codewars"
console.log(generateHashtag("Codewars Is Nice")); // "#CodewarsIsNice"
console.log(generateHashtag("code" + " ".repeat(140) + "wars")); // "#CodeWars"

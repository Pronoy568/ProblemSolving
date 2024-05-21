// Write A Function That Counts The Number Of Vowels In A Given String.

function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const exampleString = "Hello, World!";
const vowelCount = countVowels(exampleString);

console.log(
  `The number of vowels in the string "${exampleString}" is: ${vowelCount}`
);

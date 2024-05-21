// Create An Array Of Numbers With Some Duplicate Values. Write A Function To Filter Out The Duplicate Values And Return A New Array With Only Unique Numbers. Print The Result.

const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 9, 10];

function getUniqueNumbers(arr) {
  const uniqueSet = new Set(arr);
  return Array.from(uniqueSet);
}

const uniqueNumbers = getUniqueNumbers(numbers);

console.log("Array of unique numbers:", uniqueNumbers);

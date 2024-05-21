// Write A Function That Takes An Array Of Numbers And Returns The Maximum Value.
function findMaxValue(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

const numbers = [5, 2, 9, 10, 3];
const maxValue = findMaxValue(numbers);
console.log("Maximum value:", maxValue);

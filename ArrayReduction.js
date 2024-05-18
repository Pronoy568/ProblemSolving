// Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.

const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function SumEvenNumber(number) {
  return number.reduce((sum, num) => {
    if (num % 2 === 0) {
      return sum + num;
    } else {
      return sum;
    }
  }, 0);
}

const result = SumEvenNumber(Numbers);
console.log(result);

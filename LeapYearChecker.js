// Write A Function That Determines Whether A Given Year Is A Leap Year.

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const year = 2021;
const result = isLeapYear(year);

console.log(`${year} is a leap year: ${result}`);

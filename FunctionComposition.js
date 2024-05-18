// Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.

function SquareNumber(number) {
  return number * number;
}

function DoubleNumber(number) {
  return number * 2;
}

function AddNumber(number) {
  return number + 5;
}

function ComposeFunction(number) {
  return AddNumber(DoubleNumber(SquareNumber(number)));
}

const result = ComposeFunction(3);
console.log(result);

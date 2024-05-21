// Create An Array Of Objects Representing Cars With Properties Like Make, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.

const Cars = [
  {
    Name: "BMW",
    Model: "ASUS",
    Year: "2000",
  },
  {
    Name: "KCD",
    Model: "USS",
    Year: "2010",
  },
  {
    Name: "ADE",
    Model: "YUP",
    Year: "2009",
  },
];

function sortingByYear(car) {
  return car.sort((a, b) => a.Year - b.Year);
}

const result = sortingByYear(Cars);

console.log(result);

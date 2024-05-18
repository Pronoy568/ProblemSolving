// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.

const Person = [
  {
    Name: "Rahim",
    Age: 10,
    Gender: "Male",
  },
  {
    Name: "Kahim",
    Age: 14,
    Gender: "Male",
  },
  {
    Name: "Sara",
    Age: 20,
    Gender: "Female",
  },
  {
    Name: "Puja",
    Age: 13,
    Gender: "Female",
  },
  {
    Name: "Kobir",
    Age: 17,
    Gender: "Male",
  },
  {
    Name: "Sadia",
    Age: 19,
    Gender: "Female",
  },
  {
    Name: "Sakib",
    Age: 14,
    Gender: "Male",
  },
  {
    Name: "Maosumi",
    Age: 22,
    Gender: "Female",
  },
  {
    Name: "Mim",
    Age: 16,
    Gender: "Female",
  },
];

function filterFunction(people) {
  return people
    .filter((people) => people.Gender !== "Female")
    .map((people) => people.Name);
}

const Result = filterFunction(Person);

console.log(Result);

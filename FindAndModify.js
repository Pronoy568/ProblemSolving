// Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Carol", age: 22, gender: "female" },
  { name: "David", age: 35, gender: "male" },
  { name: "Eve", age: 28, gender: "female" },
];

function updatePersonAge(people, name, newAge) {
  const person = people.find((person) => person.name === name);
  if (person) {
    person.age = newAge;
  }
}

updatePersonAge(people, "Alice", 23);

console.log(people);

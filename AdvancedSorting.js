// Create An Array Of Objects Representing Students With 'Name' And 'Grades' Properties. Write A Function To Sort The Students By Average Grade In Descending Order.

const students = [
  { name: "Alice", grades: [80, 90, 95] },
  { name: "Bob", grades: [85, 88, 92] },
  { name: "Carol", grades: [75, 82, 78] },
  { name: "David", grades: [90, 92, 88] },
  { name: "Eve", grades: [70, 65, 80] },
];

function calculateAverage(grades) {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
}

function sortStudentsByAverage(students) {
  return students.sort(
    (a, b) => calculateAverage(b.grades) - calculateAverage(a.grades)
  );
}

const sortedStudents = sortStudentsByAverage(students);

console.log("Students sorted by average grade (descending):", sortedStudents);

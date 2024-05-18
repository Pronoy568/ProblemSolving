// Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.

const BooksDetails = [
  {
    Title: "English",
    Author: "Habibur",
    Year: 2014,
  },
  {
    Title: "ICT",
    Author: "Mahabubur",
    Year: 2020,
  },
  {
    Title: "Math",
    Author: "Masud",
    Year: 2017,
  },
  {
    Title: "Chemistry",
    Author: "Rouf",
    Year: 2009,
  },
  {
    Title: "Bangla",
    Author: "Alim",
    Year: 2010,
  },
];

function bookTitles(book) {
  return book.map((info) => info.Title);
}

const Result = bookTitles(BooksDetails);

console.log(Result);

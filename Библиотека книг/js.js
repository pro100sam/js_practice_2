let alphabet = {
  title: "alphabet",
  author: "Pete",
  genres: "education",
  isRead: false,
};
let rain = {
  title: "rain",
  author: "Anna",
  genres: "detective",
  isRead: false,
};
let wonder = {
  title: "wonder",
  author: "Sam",
  genres: "novel",
  isRead: false,
};

let books = [alphabet, rain, wonder];

function getBooksByGenre(genre) {
  let result = books.filter((item) => item.genres === genre);
  return result;
}

function markAsRead(title) {
  for (let prop of books) {
    if (prop.title === title) {
      prop.isRead = true;
    }
  }
}

console.log(getBooksByGenre("novel"));
markAsRead("rain");
console.log(rain.isRead);

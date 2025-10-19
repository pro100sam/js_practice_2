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
  isRead: true,
};

let books = [alphabet, rain, wonder];

function getBooksByGenre(genre) {
  let result = books.filter((item) => item.genres === genre);
  return result;
}

function markAsRead(title) {
  for (let prop of books) {
    // for (let prop in obj) {
    if (prop.title === title) {
      prop.isRead = true;
    }
  }
}

let Pete = {
  id: 1,
  name: "Pete",
  email: "pete@gmail.com",
};
let Anna = {
  id: 2,
  name: "Anna",
  email: "anna@gmail.com",
};
let Sam = {
  id: 3,
  name: "Sam",
  email: "sam@gmail.com",
};
let users = [Pete, Anna, Sam];

function findUserById(users, id) {
  for (let user of users) {
    if (user.id === id) return user;
  }
  return null;
}

let Pete = {
  id: 1,
  name: "Pete",
  email: "pete@gmail.com",
};
let Ann = {
  id: 2,
  name: "Ann",
  email: "ann@gmail.com",
};
let Sam = {
  id: 3,
  name: "Sam",
  email: "sam@gmail.com",
};
let users = [Pete, Ann, Sam];

function findUserById(users, id) {
  for (let user of users) {
    if (user.id === id) return user;
  }
  return null;
}

console.log(findUserById(users, 3));

const salaries = {
  Alice: 500,
  Bob: 700,
  Charlie: 300,
};

function getTotalSalary(obj) {
  let result = Object.values(salaries).reduce((ac, item) => ac + item);
  return result;
}

console.log(getTotalSalary(salaries));

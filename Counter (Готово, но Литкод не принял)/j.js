let ar = [];
let createCounter = function (n) {
  return function () {
    ar.push(n);
    n++;
    return ar;
  };
};

let counter = createCounter(10);

console.log(counter());
console.log(counter());
console.log(counter());

let createCounter = function (n, ar) {
  return function () {
    for (i = 0; i < ar.length; i++) {
      console.log(n);
      n++;
    }
  };
};
let array = ["call", "call", "call", "call"];
let count = createCounter(50, array);
count();

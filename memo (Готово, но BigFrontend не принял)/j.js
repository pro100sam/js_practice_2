let resolver;
let result;
function memo(a, n) {
  if (Array.from(arguments).join("_") === resolver) {
    console.log("Fetching from cache");
    return result;
  } else {
    resolver = Array.from(arguments).join("_");

    console.log("Calculating result");
    return (result = a + n);
  }
}

console.log(memo(3, 5));
console.log(memo(3, 5));
console.log(memo(3, 5));
console.log(memo(3, 5));
console.log(memo(3, 5));

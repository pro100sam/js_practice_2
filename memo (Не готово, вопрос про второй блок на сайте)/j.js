const memoizedAdd = () => {
  let cache = {};
  return (a, n) => {
    if (n in cache) {
      console.log("Fetching from cache");

      let result = cache[n] + a;
      cache[(n, a)] = result;
      return result;
    } else if (a in cache) {
      console.log("Fetching from cache");

      let result = cache[a] + n;
      cache[(a, n)] = result;
      return result;
    } else {
      console.log("Calculating result");

      let result = a + n;
      cache[(a, n)] = result;
      return result;
    }
  };
};
// эту функцию возвратит memoizedAdd
const newAdd = memoizedAdd();
console.log(newAdd(1, 5)); // вычислено
console.log(newAdd(1, 5)); // взято из кэша

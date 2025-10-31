const ar = [1, [2], [3, [[4]]]];
let result = [];

function flat(arr, depth = 1) {
  if (depth === Infinity) return flatInfinity(arr);
  if (depth <= 0) return arr;

  result = arr.concat.apply([], arr);

  flat(result, depth - 1);
  return result;
}

function flatInfinity(arr) {
  for (i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatInfinity(arr[i]);
    } else result.push(...arr.slice(i, i + 1));
  }
  return result;
}

// console.log(
//   flat(
//     [1, 2, empty, empty, undefined, [3, 4, [5, 6, [7, 8, [9, 10]]]]],
//     Infinity
//   )
// );

console.log([1, 2, empty, empty, undefined, [3, 4, [5, 6, [7, 8, [9, 10]]]]]);

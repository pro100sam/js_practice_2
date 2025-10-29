const ar = [1, [2], [3, [[4]]]];
let result = [];

function flat(arr, level) {
  if (level <= 0) return arr;

  result = arr.concat.apply([], arr);

  flat(result, level - 1);
  return result;
}

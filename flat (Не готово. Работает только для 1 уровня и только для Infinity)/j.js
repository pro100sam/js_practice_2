const ar = [1, [2], [3, [4]]];
let result = [];

// function flat(arr, level = 1) {                  // only 1
// // if (level <= 0) return result.push(arr);

//   for (i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       arr[i].map((item) => result.push(item));

//       // flat(arr[i], level - 1);
//     } else result.push(...arr.slice(i, i + 1));
//   }
// }
// flat(ar);
// console.log(result);

/////////////////////////////////////////

// function flat(arr) {                             // only Infinity
//   for (i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       flat(arr[i]);
//     } else result.push(...arr.slice(i, i + 1));
//   }
// }
// flat(ar);
// console.log(result);

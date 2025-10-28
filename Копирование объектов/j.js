// const original = {
//   name: "Alice",
//   settings: {
//     theme: "dark",
//     languages: ["en", "ru"],
//   },
// };
// let result = { ...original };
// function deepClone(obj) {
//   for (let key in obj) {
//     if (!Array.isArray(obj[key]) && typeof obj[key] === "object") {
//       Object.assign(result[key], obj[key]);
//       return deepClone(obj[key]);
//     }
//   }
//   return result;
// }

// const copy = deepClone(original);

// console.log(result);
// console.log(original);

// result.settings.theme = "light";
// result.settings.languages.push("fr");

// console.log(original.settings.theme); // "dark"
// console.log(original.settings.languages); // ["en", "ru"]

//
//
//
//
//
//

// const original = {
//   name: "Alice",
//   settings: {
//     theme: "dark",
//     languages: ["en", "ru"],
//   },
// };

// function deepClone(obj) {
//   if (Array.isArray(Object.values(obj))) {
//     let clone = [...Object.values(obj)];
//     console.log(clone);
//   } else if (typeof Object.values(obj) === "object") {
//     let clone = [...Object.values(obj)];
//   }
// for (i = 0; i < 34; i++) {
//   if (typeof Object.values(obj)[i] === "object") {
//     return deepClone(Object.values(obj)[i]);
//   }
// }
// return { ...obj };
// let clone2 = [...[Object.values(obj)[1]]];
// console.log(clone2);
// let clone3 = [...[Object.values(Object.values(obj)[1])[1]]];
// console.log(clone3);
// let clone2 = obj;
// console.log(clone2);
// let clone3 = Object.values(obj)[1];
// console.log(clone3);
// console.log(original["settings"]);
// console.log(Object.values(obj)[1]);
// console.log(original["settings"]["languages"]);
// console.log(Object.values(Object.values(obj)[1])[1]);
// let clone3 = [...[Object.values(obj)[1].Object.values(obj)[1]]];
// console.log(clone3);
// for (i = 0; i < 5; i++) {
//   if (typeof Object.values(obj)[i] === "object") {
//     console.log(Object.values(obj)[i]);
//     let clone = [...[Object.values(obj)[i]]];
//     console.log(clone);
//   }
// }
// }

// const copy = deepClone(original);
// console.log(copy);
// console.log(original);

// copy.settings.theme = "light";
// copy.settings.languages.push("fr");

// console.log(original.settings.theme); // "dark"
// console.log(original.settings.languages); // ["en", "ru"]

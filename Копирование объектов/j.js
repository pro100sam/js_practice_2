const original = {
  name: "Alice",
  settings: {
    theme: "dark",
    languages: ["en", "ru"],
  },
};

let result = { ...original };
function deepClone(obj) {
  for (let key in obj) {
    if (!Array.isArray(obj[key]) && typeof obj[key] === "object") {
      result[key] = { ...obj[key] };

      return deepClone(result[key]);
    } else if (Array.isArray(obj[key])) {
      obj[key] = [...obj[key]];
    }
  }
  return result;
}

const copy = deepClone(original);

console.log(copy);
console.log(original);

copy.settings.theme = "light";
copy.settings.languages.push("fr");

console.log(original.settings.theme); // "dark"
console.log(original.settings.languages); // ["en", "ru"]

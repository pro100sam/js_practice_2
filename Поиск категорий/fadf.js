const array = [
  { name: "width", value: 123 },
  { name: "height", value: 222 },
];
console.log(array[0].name);

function transformArray() {
  let result = array.reduce((ac, item) => {
    return {
      ...ac,
      [item.name]: item.value,
    };
  }, {});
  return result;
}

console.log(transformArray());

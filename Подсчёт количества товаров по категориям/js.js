const products = [
  { name: "Phone", category: "Electronics" },
  { name: "Phone", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
  { name: "Jeans", category: "Clothing" },
  { name: "Blender", category: "Home" },
];

function countByCategory(products) {
  let result = products.reduce((ac, item) => {
    return {
      ...ac,
      [item.category]: null,
    };
  }, {});
  let all = [];
  for (i = 0; i < products.length; i++) {
    all[i] = products[i].category;
  }
  let unique = [...new Set(all)];

  let quantity = [];
  for (i = 0; i < unique.length; i++) {
    quantity[i] = all.filter((item) => item === unique[i]);
    result[unique[i]] = quantity[i].length;
  }

  return result;
}

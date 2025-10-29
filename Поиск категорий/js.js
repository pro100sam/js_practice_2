const categories = {
  name: "Electronics",
  subcategories: [
    {
      name: "Phones",
      subcategories: [
        { name: "Smartphones", subcategories: [] },
        { name: "Feature Phones", subcategories: [] },
      ],
    },
    {
      name: "Computers",
      subcategories: [
        { name: "Laptops", subcategories: [] },
        { name: "Desktops", subcategories: [] },
      ],
    },
  ],
};

function findCategory(name, tree) {
  if (Array.isArray(tree)) {
    for (let prop of tree) {
      if (name === prop.name) return (result = prop);
      findCategory(name, prop.subcategories);
    }
  } else if (typeof tree === "object") {
    for (let key in tree) {
      if (name === tree[key]) return (result = tree);
      findCategory(name, tree[key]);
    }
  }
  if (result === undefined) return null;
  return result;
}

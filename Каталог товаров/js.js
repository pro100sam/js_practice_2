let towel = {};
let notebook = {};
let frame = {};
let items = [towel, notebook, frame];
towel.name = "towel";
towel.price = 213;
towel.category = "bathroom";

notebook.name = "notebook";
notebook.price = 15;
notebook.category = "school";

frame.name = "frame";
frame.price = 400;
frame.category = "decore";

function getTotalPriceByCategory(category) {
  let sum = 0;
  for (let prop of items) {
    if (prop.category === category) {
      sum += prop.price;
    }
  }
  return sum;
}

console.log(getTotalPriceByCategory("bathroom"));

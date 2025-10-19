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

function getTotalPriceByCategory(categor) {
  let sum = 0;
  for (let prop of items) {
    if (prop.category === categor) {
      sum += prop.price;
    }
  }
  return sum;
}
getTotalPriceByCategory("bathroom");

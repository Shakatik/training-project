import { getGribCorrectEnding } from "./grib.mjs";
import { getBoxQuantity } from "./boxes.mjs";
import { getParity } from "./parity.mjs";
const ProcessKey = {
  FUNC1: getGribCorrectEnding,
  FUNC2: getParity,
  FUNC3: getBoxQuantity,
};

const maneButton = document.getElementById("mane__button");

const filterButtons = document.querySelectorAll(".btn__filter");



let array = [];

// localStorage.setItem("array", JSON.stringify(array));
let initialData = JSON.parse(localStorage.getItem("array"));
let renderData = [...initialData];
let filterType;
let objectCounter = parseInt(localStorage.getItem("objectCounter")) || objectCounter === 0;

render();
// только рендерит массив
function render() {
  const div = document.querySelectorAll("div");
  div.forEach((item) => {
    item.remove();
  });
  renderData.forEach((element) => {
    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    const div = document.createElement("div");
    const li = document.createElement("li");
    li.id = "object" + objectCounter;
    li.textContent = element.value;
    div.append(li, deleteButton);

    deleteButton.addEventListener("click", function removeItem() {
      initialData = initialData.filter((item) => item.id !== element.id);
      renderData = initialData;
      filterItems(filterType);
      render();
      localStorage.setItem("array", JSON.stringify(initialData));
    });
    document.body.appendChild(div);
  });
  console.log(initialData);
}

function addItem(newItem) {
  initialData.push(newItem);
  filterItems(filterType);
  renderData = initialData;
  render();
  localStorage.setItem("array", JSON.stringify(initialData));
  localStorage.setItem("objectCounter", objectCounter + 1);

}

// только создает новій елемент

// Только обробатівает нажатие
// создает елмент, фильтрует, рендерит

maneButton.addEventListener("click", function Calculation() {
  const select = document.getElementById("select").value;
  const input = document.getElementById("input1").value;
  const elem = ProcessKey[select];
  const res = input + ": " + elem(input);
  const myObject = {
    id: objectCounter++,
    value: res,
    type: select,
  };
  addItem(myObject);
  // render();
});

// Только фильтрует массив
function filterItems(type) {
  console.log(filterType);
  filterType = type;
  switch (type) {
    case "FUNC1":
      renderData = initialData.filter((item) => item.type === type);
      break;
    case "FUNC2":
      renderData = initialData.filter((item) => item.type === type);
      break;
    case "FUNC3":
      renderData = initialData.filter((item) => item.type === type);
      break;
    // case "FUNC4":
    //   renderData = initialData.filter((item) => item.value === type);
    //   break;
    case "all":
      renderData = initialData;
      break;
  }
  render();
}

// Только обробатівает нажатие
const onFilterClick = (event) => filterItems(event.target.dataset.type);
// function filterItems(event) {
//   let type = event.target.dataset.type;
// }

filterButtons.forEach((button) =>
  button.addEventListener("click", onFilterClick)
);

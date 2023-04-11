import { getGribCorrectEnding } from "./grib.mjs";
import { getBoxQuantity } from "./boxes.mjs";
import { getParity } from "./parity.mjs";
const ProcessKey = {
  FUNC1: getGribCorrectEnding,
  FUNC2: getParity,
  FUNC3: getBoxQuantity,
};

const maneButton = document.getElementById("mane__button");
const gribButton = document.getElementById("grib__button");
const parityButton = document.getElementById("parity__button");
const boxButton = document.getElementById("box__button");
const allButton = document.getElementById("all__button");

// const filterButtons = [document.getElementsByClassName("btn__filter")]
const filterButtons = document.querySelectorAll(".btn__filter");

console.log(filterButtons);

const taskList = document.getElementById("task__list");

let array = [];

// localStorage.setItem("array", JSON.stringify(array));
let addArray = JSON.parse(localStorage.getItem("array"));
let objectCounter =
  parseInt(localStorage.getItem("objectCounter")) || objectCounter === 0;

render();
function render() {
  const div = document.querySelectorAll("div");
  div.forEach((item) => {
    item.remove();
  });
  console.log(addArray);
  addArray.forEach((element) => {
    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    const div = document.createElement("div");
    const li = document.createElement("li");
    li.id = "object" + objectCounter;
    li.textContent = element.value;
    div.append(li, deleteButton);

    deleteButton.addEventListener("click", function removeItem() {
      addArray = addArray.filter((item) => item.id !== element.id);
      // addArray.splice(addArray.indexOf(element), 1);
      render();
      localStorage.setItem("array", JSON.stringify(addArray));
    });
    document.body.appendChild(div);
  });
}

function addItem(newItem) {
  addArray.push(newItem);
  render();
  localStorage.setItem("array", JSON.stringify(addArray));
  localStorage.setItem("objectCounter", objectCounter + 1);
}

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
});

function displayItems(event) {
  let type = event.target.dataset.type;
  addArray = JSON.parse(localStorage.getItem("array"));
  switch (type) {
    case "FUNC1":
      addArray = addArray.filter((item) => item.type === type);
      break;
    case "FUNC2":
      addArray = addArray.filter((item) => item.type === type);
      break;
    case "FUNC3":
      addArray = addArray.filter((item) => item.type === type);
      break;
    default:
      break;
  }
  render();
}

filterButtons.forEach((button) =>
  button.addEventListener("click", displayItems)
);

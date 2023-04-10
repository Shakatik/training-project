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
const AllButton = document.getElementById("all__button");

const taskList = document.getElementById("task__list");

let array = [];

// localStorage.setItem("array", JSON.stringify(array));
let addArray = JSON.parse(localStorage.getItem("array"));
let objectCounter = parseInt(localStorage.getItem("objectCounter")) || objectCounter === 0;

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


function hideItem(type) {
  addArray = addArray.filter((item) => item.type == type)
  // console.log(addArray)
}

gribButton.addEventListener("click", function gribHide () {
  hideItem('FUNC1');
  render();
})

parityButton.addEventListener("click", function gribHide () {
  hideItem('FUNC2');
  render();
})

boxButton.addEventListener("click", function gribHide () {
  hideItem('FUNC3');
  render();
})

AllButton.addEventListener("click", function gribHide () {
  render();
})
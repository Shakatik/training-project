import { getGribCorrectEnding } from "./grib.mjs";
import { getBoxQuantity } from "./boxes.mjs";
import { getParity } from "./parity.mjs";
const ProcessKey = {
  FUNC1: getGribCorrectEnding,
  FUNC2: getParity,
  FUNC3: getBoxQuantity,
};

const button = document.getElementById("grib__button");

// let array = [1];
// localStorage.setItem("array", JSON.stringify(array));

const addArray = JSON.parse(localStorage.getItem("array"));

render();
function render() {
  const neP = document.querySelectorAll("p");
  console.log(neP);
  neP.forEach((item) => {
    item.remove();
  });

  addArray.forEach((element) => {
    const p = document.createElement("p");
    p.textContent = `${element}`;
    document.body.appendChild(p);
  });
}

function addItem(newItem) {
  addArray.push(newItem);
  render();
  localStorage.setItem("array", JSON.stringify(addArray));
}

button.addEventListener("click", function Calculation() {
  const select = document.getElementById("select").value;
  const input = document.getElementById("input1").value;
  const elem = ProcessKey[select];
  const res = input + ": " + elem(input);
  addItem(res);

});


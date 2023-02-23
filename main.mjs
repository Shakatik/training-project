import { getParity, getGribCorrectEnding } from "./grib.mjs";
import { getBoxQuantity } from "./boxes.mjs";

const ProcessKey = {
  FUNC1: getGribCorrectEnding,
  FUNC2: getParity,
  FUNC3: getBoxQuantity,
};

const select = document.getElementById("select");
const button = document.getElementById("grib__button");

button.addEventListener("click", function Calculation() {
  const input = document.getElementById("input1").value;
  if (select.value == 1) {
    const elem = ProcessKey['FUNC1'];
    const res = input + ": " + elem (input);
    const p = document.createElement("p");
    p.textContent = `${res}`;
    document.body.appendChild(p);
  } else if (select.value == 2) {
    const elem = input + ": " + CallFunc("FUNC2", input);
    const p = document.createElement("p");
    p.textContent = `${elem}`;
    document.body.appendChild(p);
  } else if (select.value == 3) {
    const elem = input + ": " + CallFunc("FUNC3", input);
    const p = document.createElement("p");
    p.textContent = `${elem}`;
    document.body.appendChild(p);
  }
});

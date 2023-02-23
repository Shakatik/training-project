// import {getGribCorrectEnding} from './grib.mjs'
// import {getParity} from './grib.mjs'
// import {getBoxQuantity} from './grib.mjs'
import { CallFunc } from "./grib.mjs";
// console.log(getGribCorrectEnding(1112))
// console.log(getParity(5))
// console.log(getBoxQuantity(5))

const select = document.getElementById("select");
const button = document.getElementById("grib__button");

button.addEventListener("click", function () {
  const input = document.getElementById("input1").value;

  if (select.value == 1) {
    const elem = input + ": " + CallFunc("FUNC1", input);
    const p = document.createElement("p");
    p.textContent = `${elem}`;
    document.body.appendChild(p);
  } else if (select.value == 2) {
    const elem = input + ": " + CallFunc("FUNC2", input);
    const p = document.createElement("p");
    p.textContent = `${elem}`;
    document.body.appendChild(p);
  } else if (select.value == 3) {
    const elem = input + ": " + CallFunc('FUNC3', input);
    const p = document.createElement("p");
    p.textContent = `${elem}`;
    document.body.appendChild(p);
    } 
});
// console.log(CallFunc('FUNC2', 10))

import { getGribCorrectEnding } from "./grib.mjs";
import { getBoxQuantity } from "./boxes.mjs";
import { getParity } from "./parity.mjs";
const ProcessKey = {
  FUNC1: getGribCorrectEnding,
  FUNC2: getParity,
  FUNC3: getBoxQuantity,
};

const button = document.getElementById("grib__button");

// let array = [
//   {
//     id:0,
//     value: "2 гриба",
//     type: "Grib",
//     },
// ];
// localStorage.setItem("array", JSON.stringify(array));

// const addArray = JSON.parse(localStorage.getItem("array"));
// const taskList = document.querySelector(".taskslist");
// console.log(taskList);

// render();
// function render() {
//   const neP = document.querySelectorAll("li");
//   neP.forEach((item) => {
//     item.remove();
//   });
//   console.log(addArray);
//   addArray.forEach((element) => {
//     const li = document.createElement("li");
//     const div = document.createElement("div");
//     const deleteButton = document.createElement("button");
//     deleteButton.appendChild(document.createTextNode("Delete"));
//     div.appendChild(deleteButton);
//     li.textContent = `${element}`;
//     console.log(element);
//     li.append(div);
//     deleteButton.addEventListener("click", function removeItem() {
//       const parent = deleteButton.closest("li");
//       const index = addArray.indexOf(parent.textContent, 0);
//       console.log(index);

//       if (index == -1) {
//         addArray.splice(index, 1);
//       }
//       console.log(parent);
//       parent.remove();
//       localStorage.setItem("array", JSON.stringify(addArray));
//     });
//     document.body.appendChild(li);
//     console.log(addArray);
//   });
// }

// function addItem(newItem) {
//   addArray.push(newItem);
//   render();
//   localStorage.setItem("array", JSON.stringify(addArray));
// }

// button.addEventListener("click", function Calculation() {
//   const select = document.getElementById("select").value;
//   const input = document.getElementById("input1").value;
//   const elem = ProcessKey[select];
//   const res = input + ": " + elem(input);
//   addItem(res);
// });

let array = [

];
localStorage.setItem("array", JSON.stringify(array));
console.log(array)
let objectCounter = 0;
button.addEventListener("click", function Calculation() {
  const select = document.getElementById("select").value;
  const input = document.getElementById("input1").value;
  const elem = ProcessKey[select];
  const res = input + ": " + elem(input);
  const li = document.createElement("li");
  li.textContent = res;
  li.id = "object" + objectCounter;
  document.body.appendChild(li);

  const myObject = {
    Id: objectCounter++,
    value: input,
    type: select,
  };
  console.log(myObject);
  console.log(array)

});








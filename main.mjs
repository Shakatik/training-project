import { getGribCorrectEnding } from "./grib.mjs";
import { getBoxQuantity } from "./boxes.mjs";
import { getParity } from "./parity.mjs";
const ProcessKey = {
  FUNC1: getGribCorrectEnding,
  FUNC2: getParity,
  FUNC3: getBoxQuantity,
};

const button = document.getElementById("grib__button");

let array = [

];
localStorage.setItem("array", JSON.stringify(array));
const addArray = JSON.parse(localStorage.getItem("array"));
let objectCounter = 0;


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
    li.textContent = element.value
    div.append(li, deleteButton);




    deleteButton.addEventListener("click", function removeItem() {
      const newArray = addArray.filter(item => item.id !== element.id);
      addArray.splice(addArray.indexOf(element), 1);
      render();
      localStorage.setItem("array", JSON.stringify(newArray));
    });
    document.body.appendChild(div);
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
  const myObject = {
    id: objectCounter++,
    value: res,
    type: select,
  };
  addItem(myObject);
});

// let array = [

// ];
// localStorage.setItem("array", JSON.stringify(array));

// let objectCounter = 0;
// button.addEventListener("click", function Calculation() {
//   const select = document.getElementById("select").value;
//   const input = document.getElementById("input1").value;
//   const elem = ProcessKey[select];
//   const res = input + ": " + elem(input);
//   const li = document.createElement("li");
//   li.textContent = res;
//   li.id = "object" + objectCounter;
//   document.body.appendChild(li);

//   const myObject = {
//     Id: objectCounter++,
//     value: input,
//     type: select,
//   };
//   console.log(myObject);
//   console.log(array)
//   array.push(myObject)
//   localStorage.setItem("array", JSON.stringify(myObject));
// });






//       const parent = deleteButton.closest("li");
//       sole.log(index);
// const index = addArray.indexOf(parent.textContent, 0);
//       con
//       if (index == -1) {
//         addArray.splice(index, 1);
//       }
//       console.log(parent);
//       parent.remove();
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
const taskList = document.querySelector(".taskslist");
console.log(taskList);

render();
function render() {
  const neP = document.querySelectorAll("li");
  console.log(neP);
  neP.forEach((item) => {
    item.remove();
  });
  console.log(addArray);
  addArray.forEach((element) => {
    const li = document.createElement("li");
    const div = document.createElement("div");
    const deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    div.appendChild(deleteButton) 
    li.textContent = `${element}`;
    li.append(div)
    deleteButton.addEventListener("click", function removeItem(item) {
      const parent = deleteButton.closest('li');
      console.log(parent);
      parent.remove();
    });
    document.body.appendChild(li);


  //   const htmlAdd = 
  //   `<li>
  //   <p>${element}</p>
  //   <div>
  //   <button class="deleteButton">X</button>
  //   </div>
  // </li>`;

    // taskList.insertAdjacentHTML("afterend", htmlAdd);
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



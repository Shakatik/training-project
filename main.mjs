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
const countInput = document.getElementById("input2");



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
      renderData = [...initialData];
      filterItemsByType(filterType);
      render();
      localStorage.setItem("array", JSON.stringify(initialData));
    });
    document.body.appendChild(div);
  });
  console.log(initialData);
}


// только создает новій елемент
function addItem(newItem) {
  initialData.push(newItem);
  filterItemsByType(filterType);
  renderData = [...initialData];
  render();
  localStorage.setItem("array", JSON.stringify(initialData));
  localStorage.setItem("objectCounter", objectCounter + 1);

}


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
    valueNum: +input,
  };
  addItem(myObject);
  // render();
});

// Только фильтрует массив
function filterByNumber(num) {
  console.log(num);
  return initialData.filter((item) => item.value.includes(num));
}

function filterItemsByType(type, num) {
  console.log(filterType);
  filterType = type;
  if (type === "FUNC1") {
    renderData = initialData.filter((item) => item.type === type);
  } else if (type === "FUNC2") {
    renderData = initialData.filter((item) => item.type === type);
  } else if (type === "FUNC3") {
    renderData = initialData.filter((item) => item.type === type);
  } else if (type === "FUNC4") {
    renderData = filterByNumber(num);
  } else if (type === "all") {
    renderData = initialData;
  }
  render();
}

// Поиск по введению в инпут
countInput.addEventListener('input', function() {
  // const num = (countInput.value);
  filterItemsByType("FUNC4", countInput.value)
})


// Только обробатівает нажатие
const onFilterClick = (event) => filterItemsByType(event.target.dataset.type);


// Только вешает обработчик на кнопки
filterButtons.forEach((button) =>
  button.addEventListener("click", onFilterClick)
);

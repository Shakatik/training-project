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
const initialData = JSON.parse(localStorage.getItem("array"));
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
  renderData = [...initialData];
  render();
  localStorage.setItem("array", JSON.stringify(initialData));
  localStorage.setItem("objectCounter", objectCounter + 1);
}

// Только фильтрует массив
function filterItemsByType(Type) {
  filterType = Type;
  localStorage.setItem("filter-type", filterType);
  const savedFilter = localStorage.getItem("filter-type");
  renderData = savedFilter !== "all" ? initialData.filter((item) => item.type === savedFilter) : initialData;
  console.log(renderData);

  console.log(savedFilter);
  console.log(filterType);
  render();
}


// Фильтр и поиск по введению в инпут
countInput.addEventListener("input", function () {
  const num = countInput.value;
  renderData = renderData.filter((item) => item.value.includes(num));
  console.log(savedFilter);

 
  console.log(num);
  render();
});

countInput.addEventListener('change', function () {
  if (countInput.value == "" ) {
    filterItemsByType(savedFilter)
  }
})

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
});


// Только обробатівает нажатие
const onFilterClick = (event) => filterItemsByType(event.target.dataset.type);

// Только вешает обработчик на кнопки
filterButtons.forEach((button) =>
  button.addEventListener("click", onFilterClick)
);

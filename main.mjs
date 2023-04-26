import { getGribCorrectEnding } from "./grib.mjs";
import { getBoxQuantity } from "./boxes.mjs";
import { getParity } from "./parity.mjs";
// rename FUNC1 ...
const ProcessKey = {
  FUNC1: getGribCorrectEnding,
  FUNC2: getParity,
  FUNC3: getBoxQuantity,
};

const maneButton = document.getElementById("mane__button");
const filterButtons = document.querySelectorAll(".btn__filter");
const countInput = document.getElementById("input2");
// remove
let array = [];

// localStorage.setItem("array", JSON.stringify(array));
const initialData = JSON.parse(localStorage.getItem("array"));
//пофиксать ошибку когда 0 элементов
let renderData = [...initialData];
let filterType = localStorage.getItem("filter-type");
// заменить обжекткоунт на время создания
let objectCounter = parseInt(localStorage.getItem("objectCounter"));
filterItemsByType(filterType);
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
  //fix showing all items after adding new
  renderData = [...initialData];
  render();
  localStorage.setItem("array", JSON.stringify(initialData));
  //remove
  localStorage.setItem("objectCounter", objectCounter + 1);
}

// Только фильтрует массив
function filterItemsByType(Type) {
  filterType = Type;
  localStorage.setItem("filter-type", filterType);
  // localStorage.getItem("filter-type");
  renderData = filterType !== "all" ? initialData.filter((item) => item.type === filterType) : initialData;

  console.log(renderData);
  console.log(filterType);
  render();
}


// Фильтр и поиск по введению в инпут
countInput.addEventListener("input", function () {
  const num = countInput.value;
  renderData = renderData.filter((item) => item.value.includes(num));
  // console.log(savedFilter);

  // fix
  if (countInput.value === "" ) {
    filterItemsByType(savedFilter)
  }
  console.log(num);
  render();
});

// countInput.addEventListener('input', function () {
//   console.log('++');
//   if (countInput.value == "1" ) {
//     filterItemsByType()

//   }
// })

// создает елмент, фильтрует, рендерит
maneButton.addEventListener("click", function Calculation() {
  const select = document.getElementById("select").value;
  const input = document.getElementById("input1").value;
  //rename
  const elem = ProcessKey[select];
  const res = input + ": " + elem(input);

  // rename
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
// поменять селект на радиобуттон с дефолтным значением
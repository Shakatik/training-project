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
const space = document.getElementById("space")
// remove
// let array = [];

// localStorage.setItem("array", JSON.stringify(array));
// let initialData = JSON.parse(localStorage.getItem("array"));
let initialData = JSON.parse(localStorage.getItem("array")) || [];

//пофиксать ошибку когда 0 элементов
let renderData = [...initialData];
let filterType = localStorage.getItem("filter-type");
// заменить обжекткоунт на время создания
let objectCounter = parseInt(localStorage.getItem("objectCounter")) || null;
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
    deleteButton.classList.add("btn__delete")
    const div = document.createElement("div");
    const li = document.createElement("li");
    li.id = "object" + objectCounter;
    li.textContent = element.value;
    div.classList.add("product")
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
  filterItemsByType(filterType);
  render();
  localStorage.setItem("array", JSON.stringify(initialData));
  //remove
  localStorage.setItem("objectCounter", objectCounter + 1);
}

// Только фильтрует массив
function filterItemsByType(Type) {
  filterType = Type;
  localStorage.setItem("filter-type", filterType);
  renderData =
    filterType !== "all"
      ? initialData.filter((item) => item.type === filterType)
      : initialData;

  console.log(filterType);
  render();
}

// Фильтр и поиск по введению в инпут
countInput.addEventListener("input", function () {
  filterItemsByType(filterType);
  const num = countInput.value;
  renderData = renderData.filter((item) => item.value.includes(num));
  // fix
  // if (countInput.value === "") {
  //   filterItemsByType(filterType);
  // }
  console.log(num);
  render();
});

// создает елмент, фильтрует, рендерит
maneButton.addEventListener("click", function Calculation() {
  // const select = document.getElementById("select").value;
  const radios = document.getElementsByName("get__type");
  let selectedValue;
  radios.forEach((radio) => {
    if (radio.checked) {
      selectedValue = radio.value;
    }
  });
  console.log(selectedValue);
  const input = document.getElementById("input1").value;
  const funcType = ProcessKey[selectedValue];
  const res = input + ": " + funcType(input);

  const productData = {
    id: objectCounter++,
    value: res,
    type: selectedValue,
    valueNum: +input,
    dateOfCreation: Date.now(),
  };
  if (input === '') {
    alert("Введите значение")
  } else {
    addItem(productData);
  }

});

// Только обробатівает нажатие и вешает класс активности
const onFilterClick = (event) => {
  const target = event.target;
  const dataType = target.dataset.type;
  filterButtons.forEach((button) => button.classList.remove("active"))
  filterItemsByType(dataType);
  target.classList.add("active")
}
// Только вешает обработчик на кнопки
filterButtons.forEach((button, index) =>{
  button.addEventListener("click", onFilterClick)
});
// поменять селект на радиобуттон с дефолтным значением

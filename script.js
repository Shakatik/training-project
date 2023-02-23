document.addEventListener("DOMContentLoaded", function () {
  const switchers = document.querySelectorAll(".switch__tab");
  const tabsin = document.querySelectorAll(".tabs__inner");
  
  function perebor() {
    switchers.forEach((element, index) => {
      tabsin[index].classList.remove("tab__active");
      element.classList.remove("active");
    });
    console.log(switcher);
    tabsin[index].classList.add("tab__active");
    switcher.classList.add("active");
  }
  switchers.forEach((switcher, index) => {
    switcher.addEventListener("click", perebor);
  });
});

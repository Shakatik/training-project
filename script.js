document.addEventListener("DOMContentLoaded", function () {
  const switchers = document.querySelectorAll(".switch__tab");

  const tabsin = document.querySelectorAll(".tabs__inner");
  function perebor () {
    switchers.forEach((element, index) => {
     tabsin[index].classList.remove("tab__active")
        element.classList.remove("active");
    });
    console.log(switcher)
    tabsin[index].classList.add("tab__active")
    switcher.classList.add("active");
  }
  switchers.forEach((switcher, index) => {

      switcher.addEventListener("click", perebor );
      
  });
});

// }D

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let tabs = document.getElementsByClassName("switch__tab1");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }

//   slides[slideIndex-1].style.display = "block";
//   tabs[slideIndex-1].className += "active";

// }

// document.getElementsByClassName('switch__tab1').click();
// document.getElementById("switch__tab1 btn--red").submit();
// document.getElementsByClassName("switch__tab1 btn--red").click ();

// function my_click1()
//             {
//             document.getElementById("mySlides").src="/img/free-icon-telegram-739260.png";
//             };
// function my_click2()
//             {
//             document.getElementById("mySlides").src="/img/free-icon-social-media-4335850.png";
//             };
// function my_click3()
//             {
//             document.getElementById("mySlides").src="/img/free-icon-whatsapp-1384023.png";
//             };

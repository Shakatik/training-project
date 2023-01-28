// let slideIndex = 1;
// showSlides(slideIndex);

const array = []
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }
// window.onload = function() {
document.addEventListener('DOMContentLoaded', function () {
const switch1 = document.getElementById('switch__tab1');
const switch2 = document.getElementById('switch__tab2');
const switch3 = document.getElementById('switch__tab3');
// const title = document.querySelector("#tabs__title"); 
const tabsin = document.getElementById('tabsin');
document.querySelectorAll('switch__tab')
switch1.addEventListener('click', () => { 

tabsin.style.display = "none";
// document.querySelector("tabs__inner").style.display == "none";
  document.querySelector("#tab1").src = "/img/tabs/image_left_sub_list_u260.png";
})

switch2.addEventListener('click', () => { 
  tabsin.style.display = "block";
  document.querySelector("#tab1").src = "/img/1587719791_1.jpg";
})

switch3.addEventListener('click', () => { 

  document.querySelector("#tab1").src = "/img/png-transparent-ghost-drawing-halloween-ghost-pics-white-marine-mammal-fictional-character-thumbnail.png";
})

});

// }





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

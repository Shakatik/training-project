let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let tabs = document.getElementsByClassName("switch__tab1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  slides[slideIndex-1].style.display = "block";
  tabs[slideIndex-1].className += "active";

}




// document.getElementById('switch__tab1 btn--red').click();
// document.getElementById("switch__tab1 btn--red").submit();
// document.getElementsByClassName("switch__tab1 btn--red").click ();



// function my_click1()
//             {
//             document.getElementById("tabs1").src="/img/free-icon-telegram-739260.png";
//             };
// function my_click2()
//             {
//             document.getElementById("tabs2").src="/img/free-icon-social-media-4335850.png";
//             };
// function my_click3()
//             {
//             document.getElementById("tabs3").src="/img/free-icon-whatsapp-1384023.png";
//             };

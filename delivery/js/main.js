const cardButton = document.querySelector('#card-button');
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cardButton.addEventListener("click", toggleModel);
close.addEventListener("click", toggleModel);

function toggleModel() {
  modal.classList.toggle("is-open");
} 

new WOW().init();
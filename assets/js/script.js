// loader
window.addEventListener("load", function () {
  document.getElementById("loader-container").style.display = "none";
  document.body.classList.remove("no-scroll");
});
document.body.classList.add("no-scroll");

// open & close menu
menu = document.querySelector(".page_nav");
bg_overlay = document.querySelector(".bg_overlay");

function open_menu() {
  menu.classList.add("active");
  bg_overlay.classList.add("active");
}

function close_menu() {
  menu.classList.remove("active");
  bg_overlay.classList.remove("active");
}


// Scroll to top & show or hide the button
let back_to_top = document.querySelector(".btn_back_to_top");

function toggleBackToTopButton() {
  if (window.scrollY === 0) {
    back_to_top.style.display = "none";
  } else {
    back_to_top.style.display = "block";
  }
}

toggleBackToTopButton();

window.addEventListener("scroll", toggleBackToTopButton);

back_to_top.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});




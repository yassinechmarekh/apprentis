// hero-sec swip
var swiper = new Swiper(".slide-swp", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
  },
  autoplay: {
    delay: 2500,
  },
  loop: true,
});

// plans swip
var swiper = new Swiper(".plans", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullests: true,
  },
  slidesPerView: 4,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  breakpoints: {
    1500: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 3,
    },
    550: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    0: {
      slidesPerView: 1,
    },
  },
});

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

// contact form
function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username : "yassineok288@gmail.com",
    Password : "",
    To: "yassineok288@gmail.com",
    From: document.getElementById("email").value,
    Subject: document.getElementById("subject").value,
    Body: document.getElementById("message").value,
  }).then(() => {
    const form = document.querySelector(
      ".contact_sec .contact_form .content_contact form"
    );
    const alert = document.querySelector(
      ".contact_sec .contact_form .content_contact .alert-success"
    );

    form.classList.add("send");
    alert.classList.add("active");
  });
}

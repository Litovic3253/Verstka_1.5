let link = document.querySelector("link");
function reloadWindow() {
  window.addEventListener("resize", function () {
    "use strict";
    window.location.reload();
  });
}
function updateWindow() {
  if (window.innerWidth < 768) {
    link.href = "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css";
    reloadWindow();
  } else {
    reloadWindow();
    link.href = "#";
  }
}

const swiperCustom = document.querySelector(".swiper");
let swiper = new Swiper(swiperCustom, {
  slidesPerView: 1.3,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },

    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    640: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
  },
});

updateWindow();

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".collapse-expand__button");
  const content = document.querySelector(".swipper");
  const fullHeight = content.scrollHeight;
  const hiddenHeight = 176; 

  toggleButton.addEventListener("click", function () {
    if (
      content.style.maxHeight === `${hiddenHeight}px` ||
      content.style.maxHeight === ""
    ) {
      content.style.maxHeight = `${fullHeight}px`;
      toggleButton.textContent = "Скрыть";
    } else {
      content.style.maxHeight = `${hiddenHeight}px`;
      toggleButton.textContent = "Показать еще";
    }
    toggleButton.classList.toggle("active");
  });
});

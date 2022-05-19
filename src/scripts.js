let toggleBtn = document.querySelector("#navbar-toggle");
let collapse = document.querySelector("#navbar-collapse");

toggleBtn.onclick = () => {
  collapse.classList.toggle("hidden");
  collapse.classList.toggle("flex");
};

new Swiper('.swiper', {
    loop: true,
    spaceBetween: 32,
    slidesPerView: 1,
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  })

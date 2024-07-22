var swiper = new Swiper(".mySwiper", {
    grid: {
      rows: 2,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
        // grid: {
        //   rows: 3,
        // },
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 24,
        // grid: {
        //   rows: 2,
        // },
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
        // grid: {
        //   rows: 2,
        // },
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Event listener untuk saat modal dibuka
    var modal = document.getElementById('modal-product-1');
    modal.addEventListener('shown.bs.modal', function () {
      var videoContainer = document.getElementById('video-container');
      var videoHTML = '<video src="./src/assets/video/arunika_vid.mp4" controls></video>';
      videoContainer.innerHTML = videoHTML;
    });

    // Event listener untuk saat modal ditutup
    modal.addEventListener('hidden.bs.modal', function () {
      var videoContainer = document.getElementById('video-container');
      videoContainer.innerHTML = '';
    });
  });
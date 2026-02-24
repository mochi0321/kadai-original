document.addEventListener("DOMContentLoaded", () => {

  const swiperElements = document.querySelectorAll(".works-swiper");

  const wrapper1 = swiperElements[0].querySelector(".swiper-wrapper");
  const wrapper2 = swiperElements[1].querySelector(".swiper-wrapper");

  let slides1 = wrapper1.children.length;
  let slides2 = wrapper2.children.length;

  const diff = Math.abs(slides1 - slides2);

  // ⭐ 少ない側にダミー追加
  if (slides1 > slides2) {

    for (let i = 0; i < diff; i++) {
      wrapper2.appendChild(createDummySlide());
    }

  } else if (slides2 > slides1) {

    for (let i = 0; i < diff; i++) {
      wrapper1.appendChild(createDummySlide());
    }

  }

  // ⭐ 最大枚数を取得
  const loopNum = Math.max(
    wrapper1.children.length,
    wrapper2.children.length
  );

  // -------------------------
  // Swiper生成
  // -------------------------

  const swiper1 = new Swiper(swiperElements[0], {
    loop: true,
    loopedSlides: loopNum,
    spaceBetween: 20,
    speed: 3000,

    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        pagination: { enabled: true }
      },
      768: {
        slidesPerView: 3,
        pagination: { enabled: false }
      }
    }
  });

  const swiper2 = new Swiper(swiperElements[1], {
    loop: true,
    loopedSlides: loopNum,
    spaceBetween: 20,
    speed: 3000,
    autoplay: false,

    pagination: {
      el: swiperElements[1].querySelector(".swiper-pagination"),
      clickable: true
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        pagination: { enabled: true }
      },
      768: {
        slidesPerView: 3,
        pagination: { enabled: false }
      }
    }
  });

  swiper1.controller.control = swiper2;
  swiper2.controller.control = swiper1;

});


// ⭐ ダミースライド生成関数
function createDummySlide() {

  const slide = document.createElement("div");
  slide.classList.add("swiper-slide", "dummy-slide");

  return slide;
}

/* 슬라이드1 */
var swiper1 = new Swiper(".swiper1", {
     rewind: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper1 .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper1 .swiper-button-next",
        prevEl: ".swiper1 .swiper-button-prev",
    },
});
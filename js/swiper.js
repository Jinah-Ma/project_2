/* 슬라이드1 */
var swiper1 = new Swiper(".swiper1",
    {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        pagination: {
            el: ".swiper1 .swiper-pagination",
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper1 .controls1 .swiper-button-next",
            prevEl: ".swiper1 .controls1 .swiper-button-prev",
        },
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 2,
                slidesPerGroup: 1,
            },
        },
    }
);


var swiper2 = new Swiper(".swiper2",
    {
        loop: true,
        slidesPerView: 6 / 2,
        centeredSlides: false,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper2 .swiper-pagination2",
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper2 .controls2 .swiper-button-next",
            prevEl: ".swiper2 .controls2 .swiper-button-prev",
        },
        autoplayDisableOnInteraction: true,
    }
);

// max-width 960px

if($(window).width() <= 960){
    var swiper1 = new Swiper(".swiper1",
    {
        slidesPerView: 1,
        centeredSlides: false,
        slidesPerGroupSkip: 1,
        grabCursor: true,
        pagination: {
            el: ".swiper1 .swiper-pagination",
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper1 .controls1 .swiper-button-next",
            prevEl: ".swiper1 .controls1 .swiper-button-prev",
        },
        keyboard: {
            enabled: true,
        },
        breakpoints: {
            769: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
        },
    }
);
}
//팝업 구현
$('.close').on('click', function (e) {
    e.preventDefault();
    $('.popup').hide();
})

//배너 이미지 애니메이션
// 1
$('.main_banner ul.banner_text li:first-child img').animate({ opacity: 1 }, 1000)

// 2
$('.main_banner ul.banner_img li.banner_img_1').animate({ opacity: 1 }, 1000)

// 3
$('.main_banner ul.banner_img li.banner_img_2').animate({ opacity: 1 }, 1000)

// 4
$('.main_banner ul.banner_img li.banner_img_3').animate({ opacity: 1 }, 1000)

// 5
$('.main_banner ul.banner_text li:last-child').animate({ opacity: 1 }, 1000)

// 공지사항
const noticeHistory = $('.notice .history li');

noticeHistory.siblings().hide().filter(':first').show();

setInterval(slideshow, 1000);
function slideshow() {
    $('.history li:first-child').hide();
    $('.history li:first-child').show();
    $('.history li:first-child').appendTo('.history');
}

//프로모션 버튼
const closeBtn = $('.promotion .p_close');
const openBtn = $('.promotion .p_open');
const hidden = $('.nav_1_pr .hidden');

closeBtn.on('click', function (e) {
    e.preventDefault();
    closeBtn.hide();
    openBtn.show();
    hidden.slideDown();
});

openBtn.on('click', function (e) {
    e.preventDefault();
    openBtn.hide();
    closeBtn.show();
    hidden.slideUp();
});

//슬라이드2 재생 정지★
var mySwiper = $('.swiper2');
$('.controls2 .stop').on('click', function(){
    $(this).hide();
    $('.controls2 .start').show();
    mySwiper.autoplay.stop();
});
$('.controls2 .start').on('click', function(){
    $(this).hide();
    $('.controls2 .stop').show();
    mySwiper.autoplay.start();
});


// 햄버거 메뉴로 없어졌다 나타나게 하기
$(function () {
    let hamMenuIcon1 = $("#hamIcon1");
    let hamMenuIcon2 = $('.hamIcon2');
    let overlay = $('.overlay');

    hamMenuIcon1.click(
        function () {
            $('nav .main_menu .sub_gnb_nav').css('right', '300vw');
            $('.ham_4').css('display', 'flex').css('right', '70vw');
            hamMenuIcon1.css('opacity', '0');
            $('.sticky').css('z-index', '1');
        }
    );

    hamMenuIcon2.click(
        function () {
            $('nav .main_menu .sub_gnb_nav').css('right', '-300vw');
            $('.ham_4').css('display', 'none').css('transition', '0.8s');
            hamMenuIcon1.css('opacity', '100');
            $('.sticky').css('z-index', '6');
        }
    );


});
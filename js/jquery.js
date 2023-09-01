

$('.close').on('click',function(e) {
    e.preventDefault();
    // $('.popup').css('display', 'block'); 아래와 같다.
$('.popup').hide();
})
// x버튼 누르면 사라지게 하기

// 1
$('.main_banner ul.banner_text li:first-child img').ready(function(){
$('.main_banner ul.banner_text li:first-child img').animate({opacity:1},1000)
})
// 2
$('.main_banner ul.banner_img li.banner_img_1').ready(function(){
    $('.main_banner ul.banner_img li.banner_img_1').animate({opacity:1},1000)
    })
// 3
$('.main_banner ul.banner_img li.banner_img_2').ready(function(){
    $('.main_banner ul.banner_img li.banner_img_2').animate({opacity:1},1000)
    })
// 4
$('.main_banner ul.banner_img li.banner_img_3').ready(function(){
    $('.main_banner ul.banner_img li.banner_img_3').animate({opacity:1},1000)
    })
// 5
$('.main_banner ul.banner_text li:last-child').ready(function(){
    $('.main_banner ul.banner_text li:last-child').animate({opacity:1},1000)
    })

// 메인배너 사이트 들어가자마자 오파서티로 나타내기




$('.promotion_list li img').click(function(event){event.preventDefault();
    $('.nav_1_pr .hidden').stop().slideToggle('slow');
})
// 스타벅스 프로모션 히든 페이지
//function(event){event.preventDefault();: 스크롤 고정해서 위로 올라가는 것을 막아준다.

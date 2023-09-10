$('.close').on('click', function (e) {
    e.preventDefault();
    // $('.popup').css('display', 'block'); 아래와 같다.
    $('.popup').hide();
})
// x버튼 누르면 사라지게 하기

// 1
$('.main_banner ul.banner_text li:first-child img').ready(function () {
    $('.main_banner ul.banner_text li:first-child img').animate({ opacity: 1 }, 1000)
})
// 2
$('.main_banner ul.banner_img li.banner_img_1').ready(function () {
    $('.main_banner ul.banner_img li.banner_img_1').animate({ opacity: 1 }, 1000)
})
// 3
$('.main_banner ul.banner_img li.banner_img_2').ready(function () {
    $('.main_banner ul.banner_img li.banner_img_2').animate({ opacity: 1 }, 1000)
})
// 4
$('.main_banner ul.banner_img li.banner_img_3').ready(function () {
    $('.main_banner ul.banner_img li.banner_img_3').animate({ opacity: 1 }, 1000)
})
// 5
$('.main_banner ul.banner_text li:last-child').ready(function () {
    $('.main_banner ul.banner_text li:last-child').animate({ opacity: 1 }, 1000)
})

// 메인배너 사이트 들어가자마자 오파서티로 나타내기





// 배너 밑 '공지사항'

$(document).ready(function () {
    $('.promotion .p_close').click(function () {
        $('.promotion .p_close').css('display', 'none');
        $('.promotion .p_open').css('display', 'block');
    });
});

$(document).ready(function () {
    $('.promotion .p_open').click(function () {
        $('.promotion .p_open').css('display', 'none');
        $('.promotion .p_close').css('display', 'block');
    });
});

//프로모션 히든 클릭 버튼 구현

$('.promotion_list li img').click(function (event) {
    event.preventDefault();
    $('.nav_1_pr .hidden').stop().slideToggle('slow');
})
// 스타벅스 프로모션 히든 페이지 나타내기
//function(event){event.preventDefault();: 스크롤 고정해서 위로 올라가는 것을 막아준다.

/* 1 */
$(document).ready(function () {
    $('.slide_se1 li.start').click(function () {
        $('.slide_se1 li.start').css('display', 'none');
        $('.slide_se1 li.end').css('display', 'block');
    });
});
$(document).ready(function () {
    $('.slide_se1 li.end').click(function () {
        $('.slide_se1 li.end').css('display', 'none');
        $('.slide_se1 li.start').css('display', 'block');
    });
});

/* 2 */
$(document).ready(function () {
    $('.slide_se2 li.start').click(function () {
        $('.slide_se2 li.start').css('display', 'none');
        $('.slide_se2 li.end').css('display', 'block');
    });
});
$(document).ready(function () {
    $('.slide_se2 li.end').click(function () {
        $('.slide_se2 li.end').css('display', 'none');
        $('.slide_se2 li.start').css('display', 'block');
    });
});

/* 3 */
$(document).ready(function () {
    $('.slide_se3 li.start').click(function () {
        $('.slide_se3 li.start').css('display', 'none');
        $('.slide_se3 li.end').css('display', 'block');
    });
});
$(document).ready(function () {
    $('.slide_se3 li.end').click(function () {
        $('.slide_se3 li.end').css('display', 'none');
        $('.slide_se3 li.start').css('display', 'block');
    });
});

// 프로모션 재생 정지 버튼 구현, 프로모션 히든페이지 슬라이드

$('.img_ctl_slider').bxSlider({
    prevSelector : ".img_ctl .prev",
    nextSelector : ".img_ctl .next",
    minSlides : 1,
    maxSlides : 3,
    moveSlides : 1,
    autoControls: true,
    stopAutoOnClick: true,
    pager: true,
    responsive : false,
    slideWidth: 819,
    slideHeight: 610,
    slideMargin : 10,
    auto: true,
    speed : 50,
});


// 스크롤을 내릴 때마다 매번 슬라이드로 나타나게 하기




/* 4 */
$(document).ready(function () {
    $('.slide_se4 li.start').click(function () {
        $('.slide_se4 li.start').css('display', 'none');
        $('.slide_se4 li.end').css('display', 'block');
    });
});
$(document).ready(function () {
    $('.slide_se4 li.end').click(function () {
        $('.slide_se4 li.end').css('display', 'none');
        $('.slide_se4 li.start').css('display', 'block');
    });
});

/* 5 */
$(document).ready(function () {
    $('.slide_se5 li.start').click(function () {
        $('.slide_se5 li.start').css('display', 'none');
        $('.slide_se5 li.end').css('display', 'block');
    });
});
$(document).ready(function () {
    $('.slide_se5 li.end').click(function () {
        $('.slide_se5 li.end').css('display', 'none');
        $('.slide_se5 li.start').css('display', 'block');
    });
});

/* 6 */
$(document).ready(function () {
    $('.slide_se6 li.start').click(function () {
        $('.slide_se6 li.start').css('display', 'none');
        $('.slide_se6 li.end').css('display', 'block');
    });
});
$(document).ready(function () {
    $('.slide_se6 li.end').click(function () {
        $('.slide_se6 li.end').css('display', 'none');
        $('.slide_se6 li.start').css('display', 'block');
    });
});


// 온라인스토어 재생 정지 버튼 구현, 온라인스토어 슬라이드




// 햄버거 메뉴로 없어졌다 나타나게 하기
$(document).ready(function() {
    let hamMenuIcon1 = $("#hamIcon1");
    let hamMenuIcon2 = $('.hamIcon2');
    let overlay = $('.overlay');

    hamMenuIcon1.click(
        function(){
            $('nav .main_menu .sub_gnb_nav').css('right', '300vw');
            $('.ham_4').css('display','flex').css('right', '70vw');
            hamMenuIcon1.css('opacity','0');
            $('.sticky').css('z-index','1');
        }
    );

    hamMenuIcon2.click(
        function(){
            $('nav .main_menu .sub_gnb_nav').css('right', '-300vw');
            $('.ham_4').css('display','none').css('transition', '0.8s');
            hamMenuIcon1.css('opacity','100');
            $('.sticky').css('z-index','6');
        }
    );

    
});

$('a').on('click', function (e) {
    if ($(this).attr('href') == '#') {
        e.preventDefault();
    } else {

    }
})

$('.popup').hide();
//팝업 구현
$('.close').on('click', function (e) {
	e.preventDefault();
	$('.popup').hide();
});
//배너 이미지 애니메이션
// 1
$('.main_banner ul.banner_text li:first-child img').animate({ opacity: 1 }, 1000);

// 2
$('.main_banner ul.banner_img li.banner_img_1').animate({ opacity: 1 }, 1000);

// 3
$('.main_banner ul.banner_img li.banner_img_2').animate({ opacity: 1 }, 1000);

// 4
$('.main_banner ul.banner_img li.banner_img_3').animate({ opacity: 1 }, 1000);

// 5
$('.main_banner ul.banner_text li:last-child').animate({ opacity: 1 }, 1000);

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

//content_2 애니메이션
const win = $(window);

win.on('scroll', function () {
	const winH = win.height();
	let scroll = $(window).scrollTop();
	let content2H = $('.content_2').offset().top;

	if (scroll + winH >= content2H) {
		$('.content_2_1 img').css({
			opacity: 1,
			transform: 'translateX(0)',
		});
		$('.content_2_1 .left_text_1').css({
			opacity: 1,
			transform: 'translateX(0)',
		});
		$('.content_2 p a').css({
			opacity: 1,
		});
	}
});

//.info_1 .container 애니메이션
win.on('scroll', function () {
	const winH = win.height();
	let scroll = $(window).scrollTop();
	let content2H = $('.info_1').offset().top;

	if (scroll + winH >= content2H) {
		$('.info_1').fadeIn(800);
		$('.info_1 .container .img').css({
			opacity:1,
		});
		$('.info_1 .botton a').css({
			opacity:1,
		});
	}
});

//.info_2 .info_text 애니메이션
win.on('scroll', function () {
	const winH = win.height();
	let scroll = $(window).scrollTop();
	let content2H = $('.info_2').offset().top;

	if (scroll + winH >= content2H) {
		$('.info_text_1').css({
			opacity: 1,
			transform: 'translateX(0)',
		});
		$('.info_text_2').css({
			opacity: 1,
			transform: 'translateX(0)',
		});
		$('.info_text_3').css({
			opacity: 1,
			transform: 'translateX(0)',
		});
	}
});

// 탑버튼 구현

const homeTop = $('.homebutton');

homeTop.on('click', function () {
	$('html, body').animate({ scrollTop: 0 }, 'slow');
});

// 햄버거 메뉴
const hamMenuOpen = $('.nav_ham .hamOC a:first-child');
const hamMenuClose = $('.nav_ham .hamOC a:last-child');
const hamMain = $('.h_wrap');
const overay = $('.overay');

hamMenuOpen.on('click', function (e) {
	e.preventDefault;
	hamMenuClose.css({ right: '67vw' });
	hamMain.css({ transform: 'translateX(0)' });
	overay.show();
});

hamMenuClose.on('click', function (e) {
	e.preventDefault;
	hamMenuClose.css({ right: '-60vw' });
	hamMain.css({ transform: 'translateX(65vw)' });
	overay.hide();
});

hamMenuClose.on({
	mouseenter: function () {
		$(this).css({ transform: 'rotate(-180deg)' });
	},
	mouseleave: function () {
		$(this).css({ transform: 'rotate(180deg)' });
	},
});

// 햄버거 메뉴
//.myStar 2댑스
const dep11 = $('.h_top .myStar');
const dep12 = $('.h_top .h_dep2');
const dep13 = $('.h_top .h_dep3');
let isOpen = false;
let icon = $('.myStar img');

dep11.on('click', function (e) {
	e.preventDefault;
	e.stopPropagation();
	if (!isOpen) {
		dep12.slideDown();
		icon.css({ transform: 'rotate(180deg)' });
		isOpen = true;
	} else if (isOpen == true) {
		dep12.slideUp('slow');
		icon.css({ transform: 'rotate(0)' });
		isOpen = false;
	}
});

//3댑스
dep12.on('click', function (e) {
	e.preventDefault;
	e.stopPropagation();
	$(this).find('.h_main .h_dep3').slideToggle();
});
//3뎁스오픈
$('.h_dep2Li').on('click', function (e) {
	e.preventDefault();
	$('.h_dep3').hide();
	$(this).find('.h_dep3').show();
});

// .h_main 2댑스
const dep21 = $('.h_main .h_dep1');
const dep22 = $('.h_main .h_dep2');
const dep3 = $('.h_main .h_dep3');
let mainIcon = $('.h_main li.h_dep1 img');

dep21.on('click', function (e) {
	e.preventDefault;
	e.stopPropagation();
	$(this).find('.h_dep2').slideToggle();
	if (!isOpen) {
		$(this).find(mainIcon).css({ transform: 'rotate(180deg)' });
		isOpen = true;
	} else if (isOpen == true) {
		$(this).find(mainIcon).css({ transform: 'rotate(0)' });
		isOpen = false;
	}
});

//3댑스

dep22.on('click', function (e) {
	e.preventDefault;
	e.stopPropagation();

	let hDep3 = $(this).find('.h_dep3');
	hDep3.on(function () {
		$(this).slideToggle();
	});
});

//모바일 배너 이미지 애니메이션
$('.banner_text_img img').animate({ opacity: 1 }, 1000);
$('.banner_img_4 img').animate({ opacity: 1 }, 1000);
$('.banner_img_5 img').animate({ opacity: 1 }, 1000);
$('.banner_img_6 img').animate({ opacity: 1 }, 1000);
$('.banner_text li:last-child').animate({ opacity: 1 }, 1000);


win.on('scroll', function () {
	let winH = win.height();
	let scroll = win.scrollTop();
	let con1 = $('.content_1').offset().top;

	if (winH + scroll >= con1) {
		$('.content_1 .content_1_1 img').fadeIn(800);
		$('.inner_text').fadeIn(2000);
	}

	let con2 = $('.content_2').offset().top;
	if (winH + scroll >= con2) {
		$('.content_2 .content_2_1 img').fadeIn(2000);
		$('.content_2 .content_2_1 .left_text_1').fadeIn(3200);
		$('.content_2 p a').fadeIn(3500);
	}
});


$('.open').on('click',function(e) {
    e.preventDefault();
    // $('.popup').css('display', 'block'); 아래와 같다.
$('.popup').show();
$('.overlay').addClass('open');
})
// 화면 검고 팝업 띄우기

$('.close').on('click',function(e) {
    e.preventDefault();
    // $('.popup').css('display', 'block'); 아래와 같다.
$('.popup').hide();
$('.overlay').removeClass('open');
})
// x버튼 누르면 사라지게 하기


$('.promotion_list:last-child img').click(function(){
    $('.nav_1_pr .hidden').stop().slideToggle('slow');
})
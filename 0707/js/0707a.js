$(document).ready(function(){
/*
이벤트 연결하기 - 사용자가 특정한 행동을 취했을 때 jquery구문 실행시키기
<필수구문 정리>- $("선택자").on("이벤트", function(){
실행할 구문
});
*/
$(".box1").on("click",function(){
    $("p").text("box1을 클릭했습니다.")
});
$(".box1").on("mouseenter", function(){
    $("p").text("box1에 마우스를 올렸습니다.")
});
$(".box1").on("mouseleave", function(){
    $("p").text("box1에서 마우스가 벗어났습니다.")
});
$(".box2").on("mousemove", function(){
    $("p").text("box2에 마우스가 움직입니다.")
});
$(window).on("scroll", function(){
    $("p").text("화면을 스크롤합니다.")
});
$(window).on("resize", function(){
    $("p").text("화면을 리사이즈합니다.")
});
});
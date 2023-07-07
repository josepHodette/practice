$(document).ready(function(){
/*
이벤트 연결하기 - 사용자가 특정한 행동을 취했을 때 jquery구문 실행시키기
<필수구문 정리>- $("선택자").on("이벤트", function(){
실행할 구문
});
*/
$(".click1").on("click",function(){
    $(".main img").attr({"src":"img/1.jpg"})
});
$(".click2").on("click",function(){
    $(".main img").attr({"src":"img/2.jpg"})
});
$(".click3").on("click",function(){
    $(".main img").attr({"src":"img/3.jpg"})
});
$(".click4").on("click",function(){
    $(".main img").attr({"src":"img/4.jpg"})
});
$(".hover1").on("mousemove",function(){
    $(".main img").attr({"src":"img/5.jpg"})
});
$(".hover2").on("mousemove",function(){
    $(".main img").attr({"src":"img/6.jpg"})
});
$(".hover3").on("mousemove",function(){
    $(".main img").attr({"src":"img/7.jpg"})
});
$(".hover4").on("mousemove",function(){
    $(".main img").attr({"src":"img/8.jpg"})
});
$(".hover5").on("mousemove",function(){
    $(".main img").attr({"src":"img/9.jpg"})
});
$(".hover6").on("mousemove",function(){
    $(".main img").attr({"src":"img/10.jpg"})
});
});
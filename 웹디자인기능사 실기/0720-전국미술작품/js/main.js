$(document).ready(function(){

    
$(".navi>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(500)
});
$(".navi>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(500)});
// $(".navi>li").eq(1).mouseover(function(){
//     $(".submenu").eq(1).stop().slideDown(500)
// });
// $(".navi>li").eq(1).mouseout(function(){
//     $(".submenu").eq(1).stop().slideUp(500)});
//     $(".navi>li").eq(2).mouseover(function(){
//         $(".submenu").eq(2).stop().slideDown(500)
//     });
//     $(".navi>li").eq(2).mouseout(function(){
//         $(".submenu").eq(2).stop().slideUp(500)});
//     $(".navi>li").eq(3).mouseover(function(){
//         $(".submenu").eq(3).stop().slideDown(500)
//     });
//     $(".navi>li").eq(3).mouseout(function(){
//         $(".submenu").eq(3).stop().slideUp(500)});
    
var imgs = 2; //이미지 개수, 0,1,2까지 총 3개 imgs 변수에 저장
var now = 0;//0번째 이미지부터 출발
start(); //start()함수구동
function start(){
    $(".imgslide>a").eq(0).siblings().css({"margin-top":"-350px"});
    setInterval(function() {slide(); }, 3000);
   }

   function slide(){
    now = now == imgs ? 0 : now+=1;
    // ==은 같냐고 물어보는 것 ?참이면0 아니면 now에 1을 더해줘라
    $(".imgslide>a").eq(now-1).css({"margin-top":"-350px"});
    $(".imgslide>a").eq(now).css({"margin-top":"0px"});
   }

   $(".tabmenu>li>a").click(function(){
    $(this).parent().addClass("active").siblings().removeClass("active");
   });
   
   $(".notice li:first").click(function(){
    $("#modal").addClass("active")
});
$(".btn").click(function(){
$("#modal").removeClass("active");
});
});
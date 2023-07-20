$(document).ready(function(){
/*
$(".navi>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(500)
});
$(".navi>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(500)
});


$(".navi>li").mouseover(function(){
    $(".submenu").stop().slideDown(500)
    $("#menu_bg").stop().slideDown(500)
});
$(".navi>li").mouseout(function(){
    $(".submenu").stop().slideUp(500)
    $("#menu_bg").stop().slideUp(500)
});

*/

$(".navi>li").mouseover(function(){
    $(".submenu").stop().slideDown(500)
});
$(".navi>li").mouseout(function(){
    $(".submenu").stop().slideUp(500)
});

var imgs = 2; //이미지 개수, 0,1,2까지 총 3개 imgs 변수에 저장
var now = 0;//0번째 이미지부터 출발
start(); //start()함수구동
function start(){
    $(".imgslide>a").eq(0).siblings().css({"margin-left":"-1200px"});
    setInterval(function() {slide(); }, 3000);
   }

   function slide(){
    /*
    if(now==imgs){
        now=0;
    }else{
        now+=1;
    }
    */
    now = now == imgs ? 0 : now+=1;
    // ==은 같냐고 물어보는 것 ?참이면0 아니면 now에 1을 더해줘라
    $(".imgslide>a").eq(now-1).css({"margin-left":"-1200px"});
    $(".imgslide>a").eq(now).css({"margin-left":"0px"});
   }
   //tabmenu(공지사항/갤러리)
   $(".tabmenu>li>a").click(function(){
    $(this).parent().addClass("active").siblings().removeClass("active");
   });
//모달작업
$(".notice li:first").click(function(){
    $("#modal").addClass("active")
});
$(".btn").click(function(){
$("#modal").removeClass("active");
});
});
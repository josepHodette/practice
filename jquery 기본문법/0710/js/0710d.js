$(document).ready(function(){
/**
 .hide(),.show(),.fadeOut(),.fadeIn()
 :요소를 숨김/보이기 처리하기
 <필수구문정리>
 바로 숨김/보이기 처리
 $("선택자").hide();
  $("선택자").show();

   $("선택자").fadeOut(시간);
    $("선택자").fadeIn(시간);

 */
// $("li").eq(0).on("click",function(){
//     $(".box1").hide()
// });

// $("li").eq(1).on("click",function(){
//     $(".box1").show()
// });

// $("li").eq(2).on("click",function(){
//     $(".box2").fadeOut(5000)
// });

// $("li").eq(3).on("click",function(){
//     $(".box2").fadeIn(7000)
// });

/*
.addClass(),.removeClass() -요소에 클래스 추가 제거하기
<필수구문정리>
$("선택자").addClass("추가할 클래스명");
$("선택자").removeClass("제거할 클래스명");
*/
// $("li").eq(0).on("click",function(){
//     $("div").addClass("on")
// });
// $("li").eq(1).on("click",function(){
//     $("div").removeClass("on")
// });
/* .text()- 특정 요소안에 문자를 가져오거나 변경하기
<필수구문정리>
 문자 가져오기
 $("선택자").text();
 문자 변경하기
 $("선택자").text("변경할 문자열");
*/
// $("li").on("click",function(){
//     var txt=$(this).text();
//     $("div").text(txt);
//     $("div").css({"color":txt});
// });
/*
.html() -선택자 안의 html구조를 가져오거나 변경하기
<필수구문정리>
html 구조 가져오기
$("선택자").html();
html 구조 변경하기
$("선택자").html("변경할 html 구조");
*/
$("button").on("click",function(){
    $("div").html("<h1>변경 후 입니다.</h1>");
});
$("div").on("click",function(){
    var ab=$(this).html();
    alert(ab);
});
});
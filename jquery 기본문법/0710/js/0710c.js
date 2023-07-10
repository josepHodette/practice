$(document).ready(function(){
/*
$(this)- 이벤트가 일어난 주체 선택하기 
*/ 

// $("li").eq(0).on("click", function(){
//     $("li").eq(0).css({"color":"red"})
// });
// $("li").eq(1).on("click", function(){
//     $("li").eq(1).css({"color":"red"})
// });
// $("li").eq(2).on("click", function(){
//     $("li").eq(2).css({"color":"red"})
// });
// $("li").eq(3).on("click", function(){
//     $("li").eq(3).css({"color":"red"})
// });
// $("li").eq(4).on("click", function(){
//     $("li").eq(4).css({"color":"red"})
// });
// $("li").eq(5).on("click", function(){
//     $("li").eq(5).css({"color":"red"})
// });

/*
.index()-선택자의 순서값 알아내기
*/

$("li").on("click", function(){
    $(this).css({"color":"red"});
    var i=$(this).index();
    alert(i);
});

/*
.width(),.height() -요소의 너비, 높이 구하기
<필수구문 정리>
넓이 값과 높이값 구하기
$("선택자").width();
$("선택자").height();

넓이값과 높이값 변경하기
$("선택자").width(변경할수치);
$("선택자").height(변경할수치);

*/
$("div").on("click",function(){
    var wid=$(this).width();
    $(this).height(wid);
});
});
// 문서가 모두 로딩되면 이후 안쪽의 스크립트구문을 실행
/* jquery :자바스크림트 라이브러리(백과사전) 자바스크립트를 쉽게 구현하는 기능으로 html css 요소를 선택한뒤 동적으로 수정하여 웹화면에 인터랙션(상호작용, 특정한변화)을 주는 것이 목적임 jquery를 이용하면 일단 로딩이 완료된 웹페이지라도 사용자의 행동에 따라 원하는 부분의 html과 css를 자유자재로 선택하여 변경할 수 있다.  */

/* jquery 선택자 : jquery로 특정요소를 선택해줌 필수구문은
$("선택할요소")
*/ 
$(document).ready(function(){
/* jquery 선택자 : jquery로 특정요소를 선택해줌 필수구문은
$("선택할요소") */ 
//     $("ul li").css({"color":"blue"});
// $(".red").css({"color":"red"});

/*
.css() - jquery로 선택한 요소의 css 속성변경
$("선택할요소").css({"속성명":"속성값"});
*/
// $(".box2").css({"width":"300px", "height":"500px"});

/*.attr() - jquery로 선택한 요소의 attr 속성 변경
<필수구문 정리>
$("선택자").attr({"속성명":"속성값"});
*/
$(".btn1").on("mousemove",function(){
    $(".frame img").attr({"src":"img/불의축제1.PNG","alt":"사진1"})
});
$(".btn2").on("click",function(){
    $(".frame img").attr({"src":"img/불의축제2.PNG","alt":"사진2"})
});
});
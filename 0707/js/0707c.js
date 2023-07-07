$(document).ready(function(){

    /*
    .animate() = 특정 요소에 애니메이션을 적용하기
    <필수구문 정리> $("선택자").animate({"속성명":"속성값"}, 시간, "가속도함수");
    가속도 함수는 외부파일을 연결해줘야함
    http://gsgd.co.uk/sandbox/jquery/easing/
    -easing.1.3.js 파일 스크립트 연결
    시간은 1000이 1초
    */
   /*
   stop 구문을 주게되면 여러번 마우스를 반복해도 한번만 실행되게 해줌
   */
$("div").on("mouseenter",function(){
    $("div").stop().animate({"width":"500px", "height":"500px"}, 800, "easeOutBounce")
});
$("div").on("mouseleave",function(){
    $("div").stop().animate({"width":"300px", "height":"300px"}, 800, "easeOutBounce")
});
});

// $(document).ready(function(){

//     /*
    
//     */
// $("div").on("mouseenter",function(){
//     $("div").animate({"width":"500px", "height":"500px"}, 800, "easeOutBounce")
// });
// $("div").on("mouseleave",function(){
//     $("div").animate({"width":"300px", "height":"300px"}, 800, "easeOutBounce")
// });
// });
$(document).ready(function(){

    /*
    e.pageX, e.pageY - 화면상에서 마우스 커서의 x축,y축 좌표 구하기
    <필수구문 정리>
    브라우저상 마우스 커서의 x축 좌표
    e.pageX
    브라우저 상 마우스 커서의 y축 좌표
    e.pageY
    */
//    $(window).on("mousemove",function(e){
//     var X=e.pageX;
//     var Y=e.pageY;
//     $(".posX").text(X);
//     $(".posY").text(Y);
//    });

/*
.scrollTop() - 화면상에서 내가 스크롤 한 만큼의 거리를 알아내기
<필수구문정리>
$(window).scrollTop();
*/
// $(window).on("scroll", function(){
//     var ab=$(this).scrollTop();
//     $("p").text(ab)
// });

/*
.offset().top - 화면상에서 특정요소의 y축 위치 알아내기
<필수구문정리>
$("선택자").offset().top;
*/
// var ab=$("div").offset().top;
// alert(ab);

/*
 $("video").get(); 해당동영상 참조 
.load()    - video 태그 제어 불러오기
.play()    - 재생하기
.pause()   - 일시정지하기
*/
// var vid=$("video").get(0);
// //비디오가 있다는 것을 인식시키기
// $(".load").on("click",function(){
//     vid.load();
// });
// $(".play").on("click",function(){
//     vid.play();
// });
// $(".pause").on("click",function(){
//     vid.pause();
// });

/*
new Date() - 날짜와 시간 알아내기
<필수구문 정리>
현재 날짜 시간에 대한 모든 정보 가져오기
new Date(); 

년도에 해당하는 정보만 가져오기
new Date().getFullYear();

월에 해당하는 정보만 가져오기
new Date().getMonth()+1;

일에 해당하는 정보만 가져오기
new Date().getDate();

요일에 해당하는 정보만 가져오기
new Date().getDay();

시에 해당하는 정보만 가져오기
new Date().getHours();

분에 해당하는 정보만 가져오기
new Date().getMinutes();

초에 해당하는 정보만 가져오기
new Date().getSeconds();
*/

// //모든 날짜와 시간정보
// var now=new Date();
// $("p").eq(0).text(now);
// //연도
// var year=new Date().getFullYear();
// $("p").eq(1).text(year);
// //월
// var month=new Date().getMonth()+1;
// //월이 0부터 시작해서 1을 더해줘야한다.
// $("p").eq(2).text(month);
// //일
// var date=new Date().getDate();
// $("p").eq(3).text(date);
// //요일
// var day=new Date().getDay();
// $("p").eq(4).text(day);
// // 시
// var hours=new Date().getHours();
// $("p").eq(5).text(hours);
// //분
// var minutes=new Date().getMinutes();
// $("p").eq(6).text(minutes);
// //초
// var seconds=new Date().getSeconds();
// $("p").eq(7).text(seconds);

/*
setInterval() - 일정시간마다 특정 구문 반복하기
<필수구문정리>
var 변수명 = setInterval(function(){
    실행할구문
}, 반복시간지정);
반복시간 지정은 1000 1초마다
*/
var abc=setInterval(function(){
    var now=new Date();
    var hr=now.getHours();
    var min=now.getMinutes();
    var sec=now.getSeconds();
    $("span").eq(0).text(hr)
    $("span").eq(1).text(min)
    $("span").eq(2).text(sec)
    if( min.toString().length == 1 ) {
        min = "0"+min;
    }
    if( sec.toString().length == 1 ) {
        sec = "0"+sec;
    }        
    $("body").html(hr +":" + min + ":"+sec);
}, 1000);

/*
mousewheel.js - 마우스 휠 이벤트 연결하기, 외부파일 스크립트 연결해줘야함
https://github.com/jquery/jquery-mousewheel
jquery.mousewheel.min.js

<필수구문정리>
$("선택자").on("mousewheel", function(event,delta){
    if(delta>0){
        마우스 휠을 올렸을 때 실행할 구문
    }else if(delta<0){
        마우스 휠을 내렸을 때 실행할구문
    }
});
*/
// $("div").on("mousewheel", function(event,delta){
//     if(delta>0){
//         $(this).css({"background-color":"red"});
//         $("p").text("마우스 휠을 올렸습니다.");        
//     }else if(delta<0){
//         $(this).css({"background-color":"blue"});       
//         $("p").text("마우스 휠을 내렸습니다.");         
//     }
// });
});
//function에 e는 액션에 의해 이벤트가 발생할때 넣어줌
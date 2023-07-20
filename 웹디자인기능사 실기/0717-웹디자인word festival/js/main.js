$(document).ready(function(){
    //메뉴작업
    // $(".navi>li").on("mouseover", function(){
    //     $(this).find(".submenu").stop().slideDown(500);        
    // });
    $(".navi>li").mouseover(function(){
        $(this).find(".submenu").stop().slideDown(500);        
    });
    $(".navi>li").mouseout(function(){
        $(this).find(".submenu").stop().slideUp(500);        
    });
    //이미지 슬라이드 작업
    var imgs = 2; //이미지 개수, 0,1,2까지 총 3개 imgs 변수에 저장
    var now = 0;//0번째 이미지부터 출발
    start(); //start()함수구동
    //fadeIn/fadeOut
    /*
    첫번째요소와 형제들에게 fadeOut()함수로 이미지를 사라지게함
    변수 now와 변수 imgs 값이 같다면 now에 0을 아니면 now의 값에 1을 더한 값을 대입
    now-1번째 이미지를 사라지게 하고 now번째 이미지를 나타나게함
    */
   /*
   function start(){
    $(".imgslide>a").eq(0).siblings().fadeOut("slow");
    setInterval(function() {slide(); }, 3000);
   }

   function slide(){
    now = now == imgs ? 0 : now+=1;
    // ==은 같냐고 물어보는 것 ?참이면0 아니면 now에 1을 더해줘라
    $(".imgslide>a").eq(now-1).fadeOut("slow");
    $(".imgslide>a").eq(now).fadeIn("slow");
   }
   */

   
  // 좌우로 구동
  /*
  function start(){
    $(".imgslide>a").eq(0).siblings().css({"margin-left":"-800px"});
    setInterval(function() {slide(); }, 3000);
   }

   function slide(){
    now = now == imgs ? 0 : now+=1;
    // ==은 같냐고 물어보는 것 ?참이면0 아니면 now에 1을 더해줘라
    $(".imgslide>a").eq(now-1).css({"margin-left":"-800px"});
    $(".imgslide>a").eq(now).css({"margin-left":"0px"});
   }
*/

  // 상하로 구동
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
//    팝업작업
   $(".notice li:first").click(function(){
        $("#modal").addClass("active")
    });
   $(".btn").click(function(){
    $("#modal").removeClass("active");
   });
  
});
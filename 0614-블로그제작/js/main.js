$(document).ready(function(){
    $(".outer-menu-item").hover(function(){ 
        $(this).find(".inner-menu").show();
    },function(){
        $(this).find(".inner-menu").hide();
    });
    $(".hover1").on("mousemove",function(){
        $(".main img").attr({"src":"img/photo1.jpg"})
    });
    $(".hover2").on("mousemove",function(){
        $(".main img").attr({"src":"img/photo2.jpg"})
    });
    $(".hover3").on("mousemove",function(){
        $(".main img").attr({"src":"img/photo3.jpg"})
    });
    $(".hover4").on("mousemove",function(){
        $(".main img").attr({"src":"img/photo4.jpg"})
    });
    $(".hover5").on("mousemove",function(){
        $(".main img").attr({"src":"img/show.jpg"})
    });
    $(".hover6").on("mousemove",function(){
        $(".main img").attr({"src":"img/waterfire.jpg"})
    });
    
    $(".bxslider").bxSlider({
        mode:'horizontal', //가로방향
        slideWidth:600, // 너비값
        captions:true, //제목표시
        auto:true,   //자동실행
        autoControls:true,  //컨트롤버튼 재생 정지
        stopAutoOnclick:true, //클릭해서 자동 실행 멈춤할 수 있도록 지정
      });

    $(".owl-carousel").owlCarousel({
        items:3,//화면에 나올 항목 개수
        margin:10,//항목과 항목 사이의 간격(margin-right)
        loop:true,//무한반복
        nav:true,//nav 표시
        navText:['이전','이후'],//nav 이전, 다음 표시
        autoplay:true,//자동스크롤 실행
        autoplayTimeout:3000,//자동스크롤할 때 시간 간격, 밀리초
        autoplayHoverPause:true,//내용위로 마우스 포인터를 올리면 자동 스크롤 일시멈춤

    });
});
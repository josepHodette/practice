$(document).ready(function(){

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
$(document).ready(function(){
    //.btnmenu 버튼 클릭시, 실행될 모션
    $(".btnMenu").on("click", function(){
        $(this).fadeOut();
        $("nav").addClass("on");
        $("section").addClass("on");

    });
    //nav 영역 안의 메뉴 선택시 실행될 모션
    $("nav li").on("click", function(){
        $(".btnMenu").fadeIn();
        $("nav").removeClass("on");
        $("section").removeClass("on");

        var i=$(this).index();
        $("section>div").removeClass("on");
        $("section>div").eq(i).addClass("on")

    });
});
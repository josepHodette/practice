$(document).ready(function(){
    $(".navi>li").on("mousemove",function(){
        $("#menubg").stop().slideDown(400);
        $(".submenu").stop().slideDown(500);
    });
    $(".navi>li").on("mouseleave",function(){
        $("#menubg").stop().slideUp(500);
        $(".submenu").stop().slideUp(400);
    });
    var imgs=2;
    var now=0;
    start();
    function start() {
        $(".imgslide>a").eq(0).siblings().css({ "margin-left": "-1700px" });
        setInterval(function () { slide(); }, 3000);
    }
    function slide() {
        now = now == imgs ? 0 : now += 1;
        $(".imgslide>a").eq(now - 1).css({ "margin-left": "-1700px" });
        $(".imgslide>a").eq(now).css({ "margin-left": "0px" });
    }
    $(".notice li:first").click(function () {
        $(".modal").addClass("active")
    });
    $(".tabmenu>li>a").click(function(){
        $(this).parent().addClass("active").siblings().removeClass("active");
       });
    $(".btn").click(function () {
        $(".modal").removeClass("active");
    });
});
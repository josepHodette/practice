$(document).ready(function () {
    $(".navi").on("mouseover", function () {
        $("#menubg").stop().slideDown(300)
        $(".submenu").stop().slideDown(500)

    });
    $(".navi").on("mouseout", function () {
        $("#menubg").stop().slideUp(500)
        $(".submenu").stop().slideUp(400)

    });
    var imgs = 2;
    var now = 0;
    start();
    function start() {
        $(".imgslide>a").eq(0).siblings().css({ "margin-top": "-400px" });
        setInterval(function () { slide(); }, 3000);
    }
    function slide() {
        now = now == imgs ? 0 : now += 1;
        $(".imgslide>a").eq(now - 1).css({ "margin-top": "-400px" });
        $(".imgslide>a").eq(now).css({ "margin-top": "0px" });
    }

    $(".tabmenu>li>a").click(function () {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    $(".notice li:first").click(function () {
        $("#modal").addClass("active")
    });
    $(".btn").click(function () {
        $("#modal").removeClass("active");
    });
});
$(document).ready(function(){
 $(".navi>li").mouseover(function(){
    $(this).find(".submenu").stop().slideDown(500)
 })
 $(".navi>li").mouseout(function(){
    $(this).find(".submenu").stop().slideUp(500)
 })

 $(".notice li:first").click(function(){
    $("#modal").addClass("active")});
 $(".btn").click(function(){
    $("#modal").removeClass("active");
    });

    var imgs=2;
    var now=0;
    start();
    function start(){
        $(".imgslide>a").eq(0).siblings().css({"margin-left" : "-1350px"});
        setInterval(function(){slide();},3000);
    }
    function slide(){
        now=now==imgs ? 0 : now+=1;
        $(".imgslide>a").eq(now-1).css({"margin-left":"-1350px"});
        $(".imgslide>a").eq(now).css({"margin-left":"0px"});
    }

});
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
});
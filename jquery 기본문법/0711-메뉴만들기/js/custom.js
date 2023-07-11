$(document).ready(function(){
    //메뉴 오버시(mouseenter/mouseover)
    $(".navi>li").mouseover(function(){
        // $(this).find(".submenu").stop().show();
            $(this).find(".submenu").stop().slideDown(500);
            //stop은 한번만 작동하게 해줌
        
    });

    //메뉴 아웃시(mouseleave/mouseout)
    $(".navi>li").mouseout(function(){
        // $(this).find(".submenu").stop().hide();
        $(this).find(".submenu").stop().slideUp(500);
    });
});
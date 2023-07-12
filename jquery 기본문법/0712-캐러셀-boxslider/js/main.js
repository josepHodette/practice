$(document).ready(function(){
    //bxslider 스크립트 설정
    $(".bxslider").bxSlider({
        mode:'horizontal', //가로방향
        slideWidth:600, // 너비값
        captions:true, //제목표시
        auto:true,   //자동실행
        autoControls:true,  //컨트롤버튼 재생 정지
        stopAutoOnclick:true, //클릭해서 자동 실행 멈춤할 수 있도록 지정
      });
    /*
    옵션            설명                                                기본값
    mode            스크롤방향                                          'horizontal'
                    'horizontal'-수평
                    'vertical'-수직
                    'fade'-fade
    speed           슬라이드 화면이 바뀌는 속도(밀리초)                 500(0.5s)
    controls        Prev/Next 컨트롤 표시                               true
    prevText        Prev 컨트롤에 표시할 텍스트를 지정                  Prev
    nextText        Next 컨트롤에 표시할 텍스트를 지정                  Next
    captions        캡션표시 img태그의 title 속성                       false
    autoControls    start/stop 컨트롤표시                               false
    auto            슬라이드 쇼를 자동실행                              false
    autoHover       슬라이드 위로 마우스 포인트 올리면 일시 정지        false         
    */
});
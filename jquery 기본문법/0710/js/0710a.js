$(document).ready(function(){
    /*
    jquery 탐색구문
    :jquery 선택자를 도와 더욱 디테일하게 html 요소 탐색
    <필수구문 정리>
    .children()  자식요소 선택
    .parent()    부모요소 선택
    .siblings()  형제요소 선택
    .find()      찾기요소 선택
    .eq()        순서값 선택
    .next()      형제 요소 중 바로 다음에 나오는 요소 선택
    .prev()      형제 요소 중 바로 이전에 나오는 요소 선택
    .not()       특정요소를 제외
    */
   
   
    //.children
//    $("li").children("span").css({"color":"red"});

// //.parent()
// $(".txt1").parent().css({"color":"red"});

//.siblings
// $("span").siblings().css({"color":"red"});

//.find
// $("ul").find(".abc").css({"color":"red"});

// .eq는 0부터 시작임
// $("li").eq(2).css({"color":"red"});

// //.prev
// $("li").eq(2).prev().css({"color":"red"});

// //.next
// $("li").eq(2).next().css({"color":"red"});

//.not
$("li").not(".ab").css({"color":"red"});
});
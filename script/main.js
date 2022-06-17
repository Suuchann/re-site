$(function(){
    menu();
})
function menu(){
    $(".gnb > li").mouseenter(function(){
        $(".lnb").stop().slideDown();
        $(".gnb-bg").stop().animate({
            height: 200
        })
    })
    $(".gnb > li").mouseleave(function(){
        $(".lnb").stop().slideUp();
        $(".gnb-bg").stop().animate({
            height: 0
        })
    })
}
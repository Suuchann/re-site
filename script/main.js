i = 0
$(function(){
    menu();
    setInterval (carousel, 5000)
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
function carousel(){
    if (i >= 3) i = 0;
    var newLeft = -1200 * i
    $(".carousel").css({
        marginLeft: newLeft
    })
    i++
}
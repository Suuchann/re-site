i = 0
$(function(){
    noticeList();
    sidebar();

    if($(window).width() < 769) {
        setInterval(mobileCarousel, 5000);
        mobileMenu();
    } else {
        setInterval (carousel, 5000);
        menu();
    }
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
function mobileMenu(){
    $(".gnb > li").on("click", function(e){
        // e.preventDefault();
        $(this).find(".lnb").stop().slideToggle();
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
function mobileCarousel() {
    let mobileWidth = $(window).width();
    if(i >= 3) i = 0;
    let xPos = -mobileWidth * i;
    $(".carousel").animate({
        marginLeft: xPos,
    });
    i++;
};
function noticeList(){
    $(".notice-box").click(function(){
        $(this).find(".notice-text").stop().slideToggle();
    })
}
function sidebar(){
    $(".burger").on("click", function(){
        $(this).hide();
        $(".close").show();
        $(".gnb-wrap").show();
        $(".xnb").show();
    });
    $(".close").on("click", function(){
        $(this).hide();
        $(".burger").show();
        $(".gnb-wrap").hide();
        $(".xnb").hide();
    });
}
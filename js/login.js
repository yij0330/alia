$(function(){

    //切换登录和二维码登录
    $('#login .title li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        let index = $(this).index();
        $('#login .change li').eq(index).addClass('current').siblings().removeClass('current');
    })

    //二维码切换
    $('#login .code div').hover(function(){
        $('#login .code .twocode').stop(true).animate({left:100},200);
        $('#login .code .phone').fadeIn(30);
    },function(){
        $('#login .code .twocode').stop(true).animate({left:175},200);
        $('#login .code .phone').fadeOut(30);
    })
    

    
    
})
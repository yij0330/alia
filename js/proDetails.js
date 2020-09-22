$(function(){
    $('#mainMenu .mtitle').mouseenter(function(){
        $('#menu').stop(true).slideDown(600);
    })
    $('#mainMenu').mouseleave(function(){
        $(this).find('#menu').stop(true).slideUp(600);
    })



    // 选择类别
    $('#books .right .type div').click(function(){
        $(this).addClass('choose').siblings('div').removeClass('choose');
    })
    
    //数量变化
    $('#books .right .change .add').click(function(){
        $('#books .right .change .reduce').addClass('hand').removeClass('disabled');
       let result = parseInt($('#books .right .count .result').val()) + 1;
       $('#books .right .count .result').val(result);
    })
    $('#books .right .change .reduce').click(function(){
       let result = parseInt($('#books .right .count .result').val()) - 1;
       if(result >= 1){
            $(this).removeClass('disabled').addClass('hand');
            $('#books .right .count .result').val(result);
       }else{
            $(this).addClass('disabled');
       }
    })

    $('.joinCar').click(function(){
        location.href = 'shopCar.html';
    })

    // 选项卡
    tabCheck(produce);

    //返回顶部
    rTop();

})
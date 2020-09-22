$(function(){
    $('.payBtn').click(function(){
        mask('确认付款','是否确定付款','确定');
    })

    //操作蒙版
    $('body').on('click','#mask .Click div',function(){
        $(this).addClass('on').siblings().removeClass('on');
        if($(this).hasClass('sure')){
            $('#mask').remove();
            let n=0;
            let arr = ['.','..','...','.','..','...','.','..'];
            let timer = setInterval(function(){
                n++;
                $('.load').html(`请勿操作，正在加载中${arr[n]}`);
                if(n==8){
                    maskWarn('支付结果','付款成功','确定','./imgs/success.jpg','支付成功');
                    $('.load').html("支付完成");
                    clearInterval(timer);
                }
            },500)
        }
        $('#mask').remove();
    })

     //事件委派
     $('body').on('click','#mask .close',function(){
        $('#mask').remove();
    })

    //窗口大小重置
    windowRe();

})
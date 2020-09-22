$(function(){

    //删除对象
    let Obj;
    //跳转对象
    

    // 产品数量增加和减少
    $('#order .main .add').click(function(){
        $('#order .main .reduce').addClass('hand').removeClass('disabled');
        let result = parseFloat($(this).prev().html())+1;
        $(this).prev().html(result);
        //改变小计
        subPrice(this,result)
        //变色
        $(this).closest('ul').css('background','#cccfff').find(':checkbox').prop('checked',true);
        if($('.main .sigSel').length == $('.main .sigSel:checked').length){
            $('.allSel').prop('checked',true);
        }else{
            $('.allSel').prop('checked',false);
        }
        //改变总价和数量
        countPrice();
    })
    

    $('#order .main .reduce').click(function(){
        let result = parseFloat($(this).next().html())-1;
        if(result<1){
            $(this).addClass('disabled').removeClass('hand');
            return;
        }else{
            $(this).next().html(result);
            //改变小计
            subPrice(this,result)
            $(this).closest('ul').css('background','#cccfff').find(':checkbox').prop('checked',true);
            //改变总价和数量
            countPrice();
        }
    })
    countPrice();

    //改变小计
    function subPrice(obj,n){
        let subPrice = $(obj).closest('ul').find('.price').html();
        $(obj).closest('ul').find('.sumPrice').html((subPrice*n).toFixed(2));
    }

    // 总数和总价
    function countPrice(){
        let count = 0;
        let sumPrice = 0;
        $('.main .sigSel:checked').each(function(){
            //数量
            count += parseInt($(this).closest('ul').find('.result').html());
            console.log(count)
            //总价
            sumPrice += parseFloat($(this).closest('ul').find('.sumPrice').html());
        })
        $('#order .summary .checkMany').html(count);
        $('#order .summary .sum').html(sumPrice.toFixed(2));
    }

    // 全选
    $('.allSel').click(function(){
        let status = $(this).prop('checked');
        if(status){
            $(':checkbox').prop('checked',status); 
            $('.main :checkbox').closest('ul').css('background','#cccfff');
        }else{
            $(':checkbox').prop('checked',status);
            $('.main :checkbox').closest('ul').css('background','#fff');
        }
        //改变总价和数量
        countPrice() 
    })
    // 反选
    $('.main .sigSel').click(function(){
        let flag = true;
        $('.main .sigSel').each(function(){
            let status = $(this).prop('checked')
            //内容中所有的input有一个没有被选中执行if语句
            if(!status){
                flag = false;
                return;
            }
        })
        $('.allSel').prop('checked',flag);
        if($(this).prop('checked')){
            $(this).closest('ul').css('background','#cccfff');
        }else{
            $(this).closest('ul').css('background','#fff');
        }
        //改变总价和数量
        countPrice();
    })
    
    //移出选中的
    $('.removeChecked').click(function(){
        if($('.main :checkbox:checked').length == 0){
            maskWarn('删除商品','您未选择商品','确定','./imgs/alert1.jpg','');
        }else{
            mask('删除商品','是否确定删除选中商品！','确定');
            Obj = $('.main :checkbox:checked').closest('ul');
        }
    })
    //移出单个   事件委派
    $('.main').on('click','ul li .remove',function(){
            mask('删除商品','是否确定删除此商品！','确定');
            Obj = $(this).closest('ul');
    })

    ////移出全部
    $('.removeAll').click(function(){
            mask('删除商品','是否确定删除全部商品','确定');
            Obj = $('.main ul');
    })

    
    //窗口大小重置
    windowRe();
    



   


    //操作蒙版
    $('body').on('click','#mask .Click div',function(){
        $(this).addClass('on').siblings().removeClass('on');
        if($(this).hasClass('sure')){
            if(Obj == $('.account')[0]){
                location.href = 'orderCenter.html';
            }else{
                Obj.remove();
                countPrice();
                if($('.main .sigSel').length == 0){
                    $('.allSel').prop('checked',false);
                }
            }
        }
        $('#mask').remove();
    })

     //事件委派
     $('body').on('click','#mask .close',function(){
        $('#mask').remove();
    })
    
   
    

    // 去结算
    $('.account').click(function(){
        if($('.main .sigSel:checked').length == 0){
            maskWarn('确认付款','您未选择商品','确定','./imgs/alert1.jpg','');
        }else{
            mask('确认付款','是否确认提交订单','去支付');
            Obj = $(this)[0];
        }
    })

    
    // 固定去结算  1471  现获取结算框的向上偏移值
    $(window).scroll(function(){
        let mainH = $('.main').outerHeight();
        let sTop = $('html,body').prop('scrollTop');
        if(sTop<=(mainH-500)){
            $("#order .tfooter").css({
                position:'fixed',
                bottom:'-46px',
                left:'50%',
                marginLeft: '-600px',
                zIndex:999,
                backgroundColor:'#eee'
            })
        }else{
            $("#order .tfooter").css({
                position: 'static',
                bottom:'-46px',
                left:'50%',
                marginLeft: '0',
                zIndex:999,
                backgroundColor:'#fff'
            })
        }
    })
    
    
})
$(function(){
    $('#orderCenter .payStyle li').click(function(){
        $(this).addClass('choose').siblings().removeClass('choose');
        let content = $(this).html();
        $('#orderCenter .menoy').html(content);
    })

    //点击+
    $('.adressAdd').click(function(){
        $(this).closest('tr').prependTo('.newAdree');
        $(this).html('x');
        $(this).closest('tr').find('td:first').addClass('choose').closest('tr').siblings().find('td:first').removeClass('choose');
        let a = '四川省';
        $(this).siblings('td:nth-child(2)').find("span").each(function(){
            a+=$(this).html();
        })
        $('.checkedAdress').html(a);
    })
    //点击x
    $('.newAdree').on('click',"td:contains('x')",function(){
        console.log($(this).hasClass('choose'))
        if($(this).siblings('td:first').hasClass('choose')){
             $(this).siblings('td:first').removeClass('choose');
             $('.checkedAdress').html("");
        }
        $(this).closest('tr').appendTo('.adree');
        $(this).html('+');
    })
    $('.newAdree').on('click','td:first-child',function(){
        $(this).addClass('choose').closest('tr').siblings().find('td:first').removeClass('choose');
        let a = '四川省';
        $(this).siblings('td:nth-child(2)').find("span").each(function(){
            a+=$(this).html();
        })
        $('.checkedAdress').html(a);
    })

    

    $('.orderBtn').click(function(){
        mask('提交订单','是否确认提交订单？','确认');
    })

    //操作蒙版
    $('body').on('click','#mask .Click div',function(){
        $(this).addClass('on').siblings().removeClass('on');
        if($(this).hasClass('sure')){
            location.href = 'menoy.html';
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

$(function(){
    //轮播图
    $("#banner .bannerInner").tyslide({
        boxh:460,//盒子的高度
        w:1000,//盒子的宽度
        h:430,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:20,//控制按钮宽度
        controlsH:20,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:true //是否显示数字
    });

    //电子书
    $("#ebook .bannerInner").tyslide({
        boxh:219,//盒子的高度
        w:331,//盒子的宽度
        h:219,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:10,//控制按钮宽度
        controlsH:3,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:false //是否显示数字
    });

    //服装
    $(".floor .bannerInner").tyslide({
        boxh:338,//盒子的高度
        w:432,//盒子的宽度
        h:338,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:5,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:10,//控制按钮宽度
        controlsH:3,//控制按钮高度
        radius:10,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:false //是否显示数字
    });
    

    // 选项卡
    tabCheck(ebook);
    tabCheck(clothing);
    tabCheck(sport);
    tabCheck(child);
    
    // 推广商品
    let lics = document.querySelectorAll('#expand .stitle li');
    let lis = document.querySelectorAll('#expand .contents>li');
    let ul = document.querySelector('#expand .contents');
    startRun(lis,lics,ul,expand,3000);
    let timer;
    
    $(window).scroll(function(){
        // alert(1)
        // clearInterval(timer);
        
    })

    // 楼层跳转
    let bgColor = ['#93dd6f','#f4a364','#c098f1','#ff9aa8','#daedfb'];
    $('#floorBox li:not(:last-child)').hover(function(){
        $(this).css({
            backgroundPositionX: -40,
            backgroundColor:bgColor[$(this).index()]
        }).stop(true).animate({width:80},300);
    },function(){
        $(this).stop(true).animate({width:40},300).css({
            backgroundPositionX: '',
            backgroundColor: ''
        });
    }).click(function(){
        let sTop = $('.Floor').eq($(this).index()).offset().top;
        // html，body滚动高度
        $('html,body').animate({scrollTop:sTop-60},600);
    })
   

     // 领劵中心
    $('#coupons').hover(function(){
        $(this).find('.code').stop(true).animate({right:39},1000);
    },function(){
        $(this).find('.code').stop(true).animate({right:-61},1000);
    })


    //返回顶部
    rTop();

    $(window).scroll(function(){
        let sTop = $('html,body').prop('scrollTop');
        if(sTop>=500){
            $('.rTop').css('display','block');
        }else{
            $('.rTop').css('display','none');
        }
    })

    

    

})



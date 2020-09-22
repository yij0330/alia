$(function(){
    $('#mainMenu .mtitle').mouseenter(function(){
        $('#menu').stop(true).slideDown(600);
    })
    $('#mainMenu').mouseleave(function(){
        $(this).find('#menu').stop(true).slideUp(600);
    })
    //轮播图
    $("#banner .bannerInner").tyslide({
        boxh:430,//盒子的高度
        w:1000,//盒子的宽度
        h:400,//图片的高度
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

    // 热卖畅销
    $('.hot li').hover(function(){
        $(this).stop(true).animate({height:140},200).siblings().stop(true).animate({height:42},200).find('div').stop(true).animate({paddingTop:0},200);
        $(this).find('div').stop(true).animate({paddingTop:20},200);
    })
   

    

    // 换一批
    let ulH = $('#like .contents li').outerHeight();
    console.log(ulH)
    let conUl = document.querySelector('#like .contents');
    let conLi = document.querySelectorAll('#like .contents li');
    let change = document.querySelector('#like .change');
    conUl.appendChild(conLi[0].cloneNode(true));
    let index = 0;
    change.onclick = function(){
        index++;
        startMove(conUl,{top:-ulH*index},600,'linear',function(){
            if(index == conLi.length || Math.abs(parseInt(conUl.style.top))>=490*conLi.length){
                index = 0;
                conUl.style.top = 0;
            }
        })
    }

  
    // 独家提供
     $("#exclusive .bannerInner").tyslide({
        boxh:510,//盒子的高度
        w:1200,//盒子的宽度
        h:450,//图片的高度
        isShow:true,//是否显示控制器
        isShowBtn:true,//是否显示左右按钮
        controltop:0,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW:16,//控制按钮宽度
        controlsH:16,//控制按钮高度
        radius:8,//控制按钮圆角度数
        controlsColor:"#d7d7d7",//普通控制按钮的颜色
        controlsCurrentColor:"#ff6600",//当前控制按钮的颜色
        isShowNum:false //是否显示数字
    });
    //选项卡
    tabCheck(exclusive);

    //返回顶部
    rTop();

 

    

})


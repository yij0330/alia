$(function(){
     // 书排名
    $('.bookrank li').hover(function(){
        $(this).addClass('active clearfix');
        $(this).siblings().removeClass('active'); 
        
    })
    
    

    //固定搜索框
    $(window).scroll(function(){
        let sTop = $('html,body').scrollTop();
        if(sTop >= 300){
            $('#fixedheader').stop(true).slideDown(300);
            $('#header  .searchbox').appendTo('#fixedheader>div');   
        }else{
            $('#fixedheader').stop(true).slideUp(300);
            $('#fixedheader .searchbox').appendTo('#header .search');
        }
    })

})


    //obj1:滚动内容  obj2：选项卡  time：时间  obj3:包裹滚动内容的盒子  
    //obj4:移入需要暂停定时器的的盒子  rightBtn,leftBtn左右按钮可写可不写
    function startRun(obj1,obj2,obj3,obj4,time,rightBtn,leftBtn){
        obj3.appendChild(obj1[0].cloneNode(true));
        obj3.style.width = obj1[0].offsetWidth * (obj1.length+1) + 'px';
        let index = 0;
       
        // 选项
        for(let i=0;i<obj1.length;i++){
            //mouseover和mouseenter有bug
            obj2[i].onmousemove = function(){
                Clear(obj2);
                Run(obj2,obj3)
                index = i;
            }
        }
        if(rightBtn && leftBtn){
            // 点击
            rightBtn.onclick = function(){
                index++;
                Clear(obj2);
                if(index == obj1.length){
                    index = 0;
                }
                Run(obj2,obj3)
            }
            leftBtn.onclick = function(){
                index--;
                Clear(obj2);
                if(index == -1){
                    index = obj1.length-1;
                }
                Run(obj2,obj3)
            }
        }
        // 定时器
        let timeId = setInterval(startSlider,time);
        //移入移出
        $(obj4).hover(function(){
            clearInterval(timeId);
        },function(){
            timeId = setInterval(startSlider,time);
        })

        function startSlider(){
            index++;
            Clear(obj2);
            if(index==obj1.length){
                obj2[0].className = 'active';
            }else{
                obj2[index].className = 'active';
            }
            startMove(obj3,{left:-obj1[0].offsetWidth*index},2000,'linear',function(){
                if(index == obj1.length){
                    index = 0;
                    obj3.style.left = 0;
                }
            })
        }
        //清空
        function Clear(obj){
            for(let i=0;i<obj.length;i++){
                obj[i].className = '';
            }
        }
        //激活状态
        function Run(obj2,obj3){
            obj2[index].className = 'active';
            startMove(obj3,{left:-obj1[0].offsetWidth*index},300,'linear');
        }
    }

    //选项卡
    function tabCheck(obj){
        let lis = obj.querySelectorAll('.stitle li');
        let content = obj.querySelectorAll('.contents>li');
        let index = 0;
        for(let i=0; i<lis.length; i++){
            $(lis[i]).hover(function(){
                $(this).addClass('active').siblings().removeClass('active');
                index = $(this).index(); 
                $(content[index]).show().siblings().hide(); 
            })
        }
    }


    function rTop(){
        //返回顶部
        let rTop = document.querySelector('.rTop');
        $('.rTop').click(function(){
            timer = setInterval(function(){
                let h = document.documentElement.scrollTop || document.body.scrollTop;
                let speed = h /500;
                document.documentElement.scrollTop = h - speed*100;
                document.body.scrollTop = h - speed*100;
                if(h <= 0){
                    clearInterval(timer);
                }
            }, 30);
        })
    }
    


    //有确定和取消按钮的蒙版
    //title content sure均为字符
    function mask(title,content,sure){
        let W = $('html').prop('clientWidth');
        let H = $('html').prop('clientHeight');
        let demo = $(`<div style='width: ${W}px;height: ${H}px;' id='mask'>
                                <div class='maskInner font18 c80'>
                                    <h2 class="clearfix normal font16">
                                        <span>${title}</span>
                                        <span class="close fr font24 hand">×</span>
                                    </h2>
                                    <div class="maskInfor tcenter">
                                        <div class="mb10">
                                            <img src="./imgs/alert1.jpg">
                                            <span>${content}</span>
                                        </div>
                                        <div class="clearfix Click">
                                            <div class="cancel fl">取消</div>
                                            <div class="sure fr on">${sure}</div>
                                        </div>
                                    </div>
                                </div>
                        </div>`);
        demo.appendTo('body');
    }

    //警示蒙版
    function maskWarn(title,content,sure,src,promiTxt){
        let W = $('html').prop('clientWidth');
        let H = $('html').prop('clientHeight');
        let demo = $(`<div style='width: ${W}px;height: ${H}px;' id='mask'>
                                <div class='maskInner font18 c80'>
                                    <h2 class="clearfix normal font16">
                                        <span>${title}</span>
                                        <span class="close fr font24 hand">×</span>
                                    </h2>
                                    <div class="maskInfor tcenter">
                                        <div>
                                            <img src="${src}">
                                            <span>${content}</span>
                                        </div>
                                        <p class="font14 c80 lh24 mb10">${promiTxt}</p>
                                        <div class="Click">
                                            <div class="cancel on mauto">${sure}</div>
                                        </div>
                                    </>
                                </p>
                        </div>`);
        demo.appendTo('body');
    }

    //窗口大小重置
    function windowRe(){
        $(window).resize(function(){
            if($('#mask')[0]){
                let title = $('#mask h2 span:first-child').html();
                let content = $('#mask .maskInfor>div:first-child span').html();
                let sure = $('#mask .Click div:last-child').html();
                let src = $('#mask img').attr('src');
                let promiTxt = $('#mask .maskInfor p').html();
                let len = $('#mask .Click div').length;
                $('#mask').remove();
                if(len == 1){
                    maskWarn(title,content,sure,src,promiTxt);
                }else{
                    mask(title,content,sure);
                }
                
            }
        })
    }


    

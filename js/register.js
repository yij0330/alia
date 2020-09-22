$(function(){
    //表单验证
    $('.myform').validate({
        //规则:
        rules:{
            username:{
                required:true,
                isUser:true
            },
            pwd:{
                required:true,
                isPwd:true
            },
            surePwd:{
                equalTo:'#register .pwd'
            },
            tel:{
                required:true,
                isTel:true
            }
        },
        //提示
        messages:{
            username:{
                required:'请输入用户名'
            },
            pwd:{
                required:'请输入密码'
            },
            surePwd:{
                equalTo:'两次输入不一致'
            },
            tel:{
                required:'请输入电话号码'
            }
        }
    })
    //验证码
    let Random = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
    'S','T','U','V','W','X','Y','Z'];//随机数

    $('#register .codeBtn').on('click',function(){
        let len = $(this).val().length;
        let str = '';
        for(let i=0; i<len; i++){
            str += Random[randomInt(0,Random.length-1)];
        }
        $(this).val(str)
    })
    let errorInfor = $('<span class="errorInfor">验证码不正确</span>');
    $('#register .code').blur(function(){
        let result = $('#register .code').val().toUpperCase();
        if(result != $('#register .codeBtn').val()){
            errorInfor.appendTo($('#register .code').closest('p'));
        }else{
            errorInfor.remove();
        }
    })
    function randomInt(min,max){
        return Math.floor(Math.random()*(max-min+1)+min);
    }
    

    

    // 同意协议 才能点击注册
    $('#register .agree').on('click',function(){
        if($(this).prop('checked')){
            $('#register .btn').prop('disabled',false).css('background','#f60');
        }else{
            $('#register .btn').prop('disabled',true).css('background','#ccc');
        }
    })
    
    
    
    
    //用户名规则
    jQuery.validator.addMethod("isUser", function(value, element) { 
        var tel = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;//正则
        return this.optional(element) || (tel.test(value));
    }, "用户名不合法");
    //密码规则
    jQuery.validator.addMethod("isPwd", function(value, element) { 
        var tel = /^[a-zA-Z]\w{5,17}$/;//正则
        return this.optional(element) || (tel.test(value));
    }, "密码不正确");

    //手机规则
    jQuery.validator.addMethod("isTel", function(value, element) { 
        var tel = /^1(3|4|5|6|7|8|9)\d{9}$/;//正则
        return this.optional(element) || (tel.test(value));
    }, "手机号码不合法");

    // 用户名
    delVal($('.myform .username'));
    //密码
    delVal($('.myform .pwd'));
    // 再次输入密码
    delVal($('.myform .surePwd'));
    // 再次输入密码
    delVal($('.myform .tel'));

    // 输入信息时删除按钮显示 点击清空 没有内容隐藏
    //obj:jq对象
    function delVal(obj){
        obj.on('input',function(){
            let len = obj.val().length;
            if(len > 0){
                $(this).nextAll('span').show();
            }else{
                $(this).nextAll('span').hide();
            }
        })
        obj.nextAll('span').on('click',function(){
            $(this).hide();
            $(this).siblings('input').val('');
        })
    }
    
})
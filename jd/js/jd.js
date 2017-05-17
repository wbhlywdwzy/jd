$(function() {
    'use strict';
    //头部的实时点击关闭
    $(".closed").on("click", function() {
            $(".banner").fadeOut();
        })
        //地点选则
    $(".morearea span").on("click", function() {
        var val = $(this).html();
        $(".area span").html(val);
        $(this).addClass("h").siblings().removeClass("h")
    })

    //头部导航栏
    $(".changeli").on("mouseover", function() {
        $(".change-hover").show();
    });
    $(".changeli").on("mouseleave", function() {
        $(".change-hover").hide();
    });
    $(".changeli2").on("mouseover", function() {
        $(".change-hover2").show();
    });
    $(".changeli2").on("mouseleave", function() {
        $(".change-hover2").hide();
    });
    $(".changeli3").on("mouseover", function() {
        $(".change-hover3").show();
        $(".erweima").hide()
    });
    $(".changeli3").on("mouseleave", function() {
        $(".change-hover3").hide();
        $(".erweima").show()
    })
//搜索框相机处文件选择
    
    
    //购物车
    $(".shop").on("mouseover", function() {
        $(".empty").show();
    })
    $(".shop").on("mouseleave", function() {
        $(".empty").hide();
    });
    //左侧主导航hover时详情出现
    $(".details-left ul li").on("mouseover", function() {
        $(this).children(".pop").show();
        $(this).siblings(".details-left ul li").children(".pop").hide();
    });
    $(".details-left ul li").on("mouseleave", function() {
            $(this).children(".pop").hide();
        })
        //幻灯自动播放
    var set;
    var len = $(".pic").length;
    var i = 0;
    for (var j = 0; j < $(".pic").length; j++) {
        $(".cs").append("<div class='c'></div>")
    }
    $(".pic").eq(0).show();
    $(".c").eq(1).addClass("h");
    ppt();
    $(".c").on("mouseover", function() {
        var i = $(this).index();
        $(".pic").eq(i).show().siblings(".pic").hide();
        $(this).addClass("h").siblings(".c").removeClass("h");
    })
    $(".ppt").on("mouseover", function() {
        clearInterval(set);
    })
    $(".ppt").on("mouseleave", function() {
        ppt();
    })
    $(".pt-left").on("click", function() {
        if (i > 0) {
            i--;
        } else {
            i = len - 1;
        }
        $(".pic").eq(i).show().siblings(".pic").hide();
        $(".c").eq(i + 1).addClass("h").siblings(".c").removeClass("h");
    })
    $(".pt-right").on("click", function() {
        if (i < len - 1) {
            i++;
        } else {
            i = 0;
        }
        $(".pic").eq(i).show().siblings(".pic").hide();
        $(".c").eq(i + 1).addClass("h").siblings(".c").removeClass("h");
    })

    function ppt() {
        set = setInterval(function() {
            if (i < len - 1) {
                i++;
            } else {
                i = 0;
            }
            $(".pic").eq(i).show().siblings(".pic").hide();
            $(".c").eq(i + 1).addClass("h").siblings(".c").removeClass("h");
        }, 2000)
    }
    //左右点击无缝轮播

    $('.act-right').on("click", function() {
        $(".act-ppt .pica").animate({
            'margin-left': "-1000"
        }, function() {
            $(".act-con").eq(0).appendTo($(".pica"));
            $(".pica").css({
                'margin-left': '0px'
            });
        });
    })

    $('.act-left').on("click", function() {
            $(".pica").css({
                'margin-left': '-1000px'
            });
            $(".act-con").eq(3).prependTo($(".pica"));
            $(".pica").stop(true).animate({
                'margin-left': '0'
            });
        })
        //右侧公告下方条左右滑动，相应内容的切换
    $(".first").on("mouseover", function() {
        $(".one").addClass("sth").siblings(".two").removeClass("sth");
        $(".move-line").css({
            "transform": "translateX(0px)"
        });
    });
    $(".second").on("mouseover", function() {
        $(".two").addClass("sth").siblings(".one").removeClass("sth");
        $(".move-line").css({
            "transform": "translateX(45px)"
        });
    });

    //右侧下方的内容
    $(".server-first").on("mouseover", function() {
        $(".server-first .pub").hide();
        $(".server-first,.liwk ").css({
            "height": "auto"
        })
        $(".server-first .font").css({
            "margin-top": "-14px"
        });
        $(".server-two").hide();
        $(".hover").show().stop(true).animate({
            "top": "28px"
        }, 100);
    });

    $(".hclosed").on("click", function() {
        $(".hover").fadeOut();

        $(".server-first").css({
            "height": "69px"
        })
        $(".server-first .liwk").css({
            "height": "55px"
        })
        $(".server-two").show();
        $(".server-first .pub").show();
        $(".server-first .font").css({
            "margin-top": "0"
        });
        $(".hhh").hide();
    });
    $(".server-first .liwk").on("mouseover", function() {
            $(this).children(".hhh").show();
            $(this).siblings(".liwk").children(".hhh").hide();
        })
        //切换外框
    $(".font").on("mouseover", function() {
        var i = $(this).parent("li").index();
        $(".ggys").eq(i).show().siblings(".ggys").hide();
    })

    //话费切换
    $(".tel-nav li a").on("mouseover", function() {
        $(this).addClass("lih");
        $(this).parent("li").siblings("li").children("a").removeClass("lih")
    });

    //话费充值select充值价格
    function select(a,m){
    $("#select").on("change",function(){
        var val=$("#select").find('option:selected').val();
        if(val==a){
           $("#select").siblings(".mianzhi").text(m) 
        }
    })
    };
    select("10","￥9.8-￥11.0");
    select("20","￥19.6-￥21.0");
    select("30","￥29.4-￥31.0");
    select("50","￥49.0-￥50.0");
    select("100","￥98.0-￥100.0");
    select("200","￥196.0-￥200.0");
    select("300","￥294.0-￥300.0");
    select("500","￥490.0-￥500.0");   
    
    
    function select2(a,m){
    $(".select").on("change",function(){
        var val1=$(".select").find('option:selected').val();
        if(val1==a){
           $(".values").text(m) 
        }
    })
    };
    select2("50","￥7.5-￥10.0");
    select2("100","￥9.95-￥20.0");
    select2("200","￥19.9-￥20.5");
    select2("300","￥29.0-￥29.9");
    select2("500","￥49.0-￥50.0");  
    function select3(a,m){
    $(".month").on("change",function(){
        var val1=$(".month").find('option:selected').val();
        if(val1==a){
           $(".month").siblings(".mianzhi").text(m) 
        }
    })
    };
  select3("38","50分钟300M流量");
  select3("48","50分钟500M流量");
  select3("58","100分钟500M流量");
  select3("88","220分钟700M流量");
  select3("138","500分钟1G流量");
  select3("158","500分钟2G流量");
  select3("238","1000分钟2G流量");
  select3("268","1000分钟3G流量");
  select3("338","2000分钟3G流量");
  select3("558","4000分钟6G流量");

    //旅游切换

    $(".ggys li").on("mouseover", function() {
            $(this).children(".tel-nav-con").show();
            $(this).siblings("li").children(".tel-nav-con").hide();
            var a = $(this).index();
            $(".airpicall").stop(true).animate({
                "left": a * -192
            });
        })
        //置顶搜索框，右侧固定导航
    $(window).scroll(function() {
            var w_h = $(window).height();
            var w_t = $(window).scrollTop();
            if (w_h < w_t) {
                $(".search-fix").fadeIn();
                $(".left-nav").fadeIn();
            } else {
                $(".search-fix").fadeOut();
                $(".left-nav").fadeOut();
            }

        })
        //左侧滚动
    $(".quality").on("click", function() {
        $(".quality").addClass("qh").siblings().removeClass("qh");
    });

    function top(i, s, m) {
        $(window).scroll(function() {
            var w_t = $(window).scrollTop();
            if (w_t > s && w_t <= m) {
                $(".quality").eq(i).addClass("qh").siblings().removeClass("qh");
            }
        })
    };
    top(1, 1000, 1200);
    top(1, 1200, 1400);
    top(2, 1400, 1600);
    top(3, 1600, 1800);
    top(4, 1800, 2000);
    top(5, 2000, 2200);
    top(6, 2200, 2400);
    top(7, 2400, 2700);
    top(8, 2700, 2900);
    top(9, 2900, 3000);
    top(10, 0);

    function move(i, val) {
        $(".quality").eq(i).on("click", function() {
            $("body").stop(true).animate({
                "scrollTop": val
            }, 1000);
        })
    }
    move(0, 700);
    move(1, 1000);
    move(2, 1200);
    move(3, 1400);
    move(4, 1600);
    move(5, 1800);
    move(6, 2200);
    move(7, 2400);
    move(8, 2700);
    move(9, 3000);
    move(10, 0);
    //右侧导航栏
    $(".rnav-w").on("mouseover", function() {
        $(this).children(".tab-txt").stop(true).animate({
            "left": "-60px"
        }).css({
            "background": "#c81623"
        })
    });
    $(".rnav-w").on("mouseleave", function() {
        $(this).children(".tab-txt").stop(true).animate({
            "left": "35px"
        }).css({
            "background": "#7a6e6e"
        })
    })
    
//手机正则匹配
    var zz = /^1[34578]\d{9}$/; //手机正则
    var nums = null;
    var vnums = '';
    function zhengze(a,b){
        
    a.on("blur", function() {
        vnums = '';
        nums = a.val();
        if (nums == '') {
            b.text("手机号不能为空");
        
        } else if (!zz.test(nums)) {
            b.text("手机号错误");
     
        } else {
           b.text("");
        }
    }); //手机号
    }
    zhengze($(".fare .inp"),$(".fare .yanzheng"));
    zhengze($(".flow .inp"),$(".flow .yanzheng"));
    zhengze($(".meal .inp"),$(".meal .yanzheng"));
    
    

    countDown("2017/5/14 13:11:59", ".time");

  function countDown(time, id) {
    var hour_elem = $(id).find('.hour');
    var minute_elem = $(id).find('.minute');
    var second_elem = $(id).find('.second');

    //if(typeof end_time == "string") 
    var end_time = new Date(time).getTime(), //月份是实际月份-1 
    sys_second = (end_time - new Date().getTime()) / 1000;
    var timer = setInterval(function () {
      if (sys_second > 1) {
        sys_second -= 1;
        var hour = Math.floor((sys_second / 3600) % 24);
        var minute = Math.floor((sys_second / 60) % 60);
        var second = Math.floor(sys_second % 60);
        $(hour_elem).text(hour < 10 ? "0" + hour : hour); //计算小时 
        $(minute_elem).text(minute < 10 ? "0" + minute : minute); //计算分钟 
        $(second_elem).text(second < 10 ? "0" + second : second); //计算秒杀 
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }
   
    
    //登录遮罩
    $(".jdvip,.love,.talk").on("click",function(){
        $(".cover").fadeIn();
    })
    $(".login-closed").on("click", function() {
        $(".cover").fadeOut();
    })
    $(".qq a").on("click",function(){
        $(this).addClass("ah").parent().siblings().children().removeClass("ah");
        var i=$(this).parent().index();
        $(".qrcode-login").eq(i).addClass("logins").siblings(".qrcode-login").removeClass("logins");
    })    
    $(".mask").on("mouseover",function(){
        $(".mask").stop(true).animate({"left":"0"});
        $(".phone").fadeIn()
    })    
    $(".tu").on("mouseleave",function(){
        $(".mask").stop(true).animate({"left":"100"});
        $(".phone").fadeOut();
    })
})
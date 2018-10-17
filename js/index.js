
$(function(){
//	下拉框效果
//	关注微信
	$(".guanzhu").mouseenter(function(){
		$(".guanzhu").css({
			background:"#fff",
			"z-index":3,
			border:"1px solid #d9d9d9",
			"box-sizing":"border-box",
			"border-bottom":"none"
		});
		$(".guanzhu .weixin").css({
			display:"block"
		});
	});
	$(".guanzhu").mouseleave(function(){
		$(".guanzhu").css({
			background:"#f2f2f2",
			border:"none"
		});
		$(".guanzhu .weixin").css({
			display:"none"
		});
	});
//	下载APP
	$(".xiazai").mouseenter(function(){
		$(".xiazai").css({
			background:"#fff",
			"z-index":3,
			border:"1px solid #d9d9d9",
			"box-sizing":"border-box",
			"border-bottom":"none"
		});
		$(".xiazai .app").css({
			display:"block"
		});
	});
	$(".xiazai").mouseleave(function(){
		$(".xiazai").css({
			background:"#f2f2f2",
			border:"none"
		});
		$(".xiazai .app").css({
			display:"none"
		});
	});
//	客户服务
	$(".kehu").mouseenter(function(){
		$(".kehu").css({
			background:"#fff",
			"z-index":3,
			border:"1px solid #d9d9d9",
			"box-sizing":"border-box",
			"border-bottom":"none"
		});
		$(".kehu .sanjiao").css({
			"border-top-color":"#ff6a00"
		});
		$(".fw").css({
			display:"block"
		});
	});
	$(".kehu").mouseleave(function(){
		$(".kehu").css({
			background:"#f2f2f2",
			border:"none"
		});
		$(".kehu .sanjiao").css({
			"border-top-color":"#cfd5d3"
		});
		$(".fw").css({
			display:"none"
		});
	});
//	购物车
	$(".gouwu").mouseenter(function(){
		$(".gouwu").css({
			background:"#fff",
			"z-index":3,
			border:"1px solid #d9d9d9",
			"box-sizing":"border-box",
			"border-bottom":"none"
		});
		$(".gouwu .sanjiao").css({
			"border-top-color":"#ff6a00"
		});
		$(".gouwuDiv").css({
			display:"block"
		});
	});
	$(".gouwu").mouseleave(function(){
		$(".gouwu").css({
			background:"#f2f2f2",
			border:"none"
		});
		$(".gouwu .sanjiao").css({
			"border-top-color":"#cfd5d3"
		});
		$(".gouwuDiv").css({
			display:"none"
		});
	});
	//搜索框效果
	$("#logo .search input").blur(function(){
		$curval=$("#logo .search input").val();
		if($curval==""){
			$(this).val(this.defaultValue);
		}else{
			$(this).val($curval);
		}
	});
	$("#logo .search input").keydown(function(){
		console.log($("#logo .search input").val());
		$curval=$("#logo .search input").val();
		if($curval==this.defaultValue){
			$(this).val("")
		}else{
			$(this).val($curval);
		}
	});

 	//轮播图上右边的图片
    $("#banner .rightbox img").hover(function(){
      $(this).animate({
        'left' : '-5px'
      },'normal');
    },function(){
      $(this).animate({
        'left' : '0px'
      },'normal');      
    });
    
    //限时抢购右边的图片放大效果
    $("#xianshi .xiantime img").hover(function(){
    	$(this).animate({
    		'display':'inline-block',
    		'width':'260px',
    		'height':'210px',
    		'margin':'-5px 0px 0px -5px'
    	},'normal');
    },function(){
    	$(this).animate({
    		'width':'250px',
    		'height':'200px',
    		'margin':'0px'
    	},'normal')
    });
    
    //永生花更多类别
    $(".yshua").mouseenter(function(){
		$(".yshua").css({
			"z-index":5,
		});
		$(".ysflower").css({
			display:"block"
		});
	});
	$(".yshua").mouseleave(function(){
		$(".yshua").css({
			border:"none"
		});
		$(".ysflower").css({
			display:"none"
		});
	});
	  //礼品/公仔类别
    $(".lipin").mouseenter(function(){
		$(".lipin").css({
			"z-index":5,
		});
		$(".lipingong").css({
			display:"block"
		});
	});
	$(".lipin").mouseleave(function(){
		$(".lipin").css({
			border:"none"
		});
		$(".lipingong").css({
			display:"none"
		});
	});
	
//	右侧边栏固定得
//	$("#infor a").mouseenter(function(){
//		$(this).each(function{
//			$(this "div").css({
//				display:"block"
//			});
//		});
//	});
  });
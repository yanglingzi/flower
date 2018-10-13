
$(function(){
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
  });
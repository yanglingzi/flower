
$(function(){
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
  });
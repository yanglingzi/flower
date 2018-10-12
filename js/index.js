
$(function(){
	$(".fw").css({
		width:"76px",
		position:"absolute",
		top:"34px",
		left:0,
		border:"1px solid #737373",
		
	});
	$(".kehu").mouseenter(function(){
		$(this).css({
			background:"#fff",
			border:"1px solid #d9d9d9",
		});
		$(".kehu .sanjiao").css("border-top-color","#ff6a00");
	});
	
	$(".kehu").mouseleave(function(){
		$(this).css({
			background:"#f2f2f2",
			border:"1px solid #f2f2f2",
			padding:"0 15px 0 10px"
		});
		$(".kehu .sanjiao").css("border-top-color","#d8d8d8");
	});
	
	$(".gouwu").mouseenter(function(){
		$(this).css({
			background:"#fff",
		})
	});
});

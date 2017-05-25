$(function(){
	var index=0;
	$(".con li").eq(index).css("left",0);
	$(".biao li").eq(index).addClass("active");
	setInterval(function(){
		$(".biao li").eq(index).addClass("active").siblings().removeClass("active");
		$(".con li").eq(index).animate({"left":-930},1000);	
		$(".con li").eq(index+1).animate({"left":0},1000);		
		$(".con li").eq(index).siblings().css("left",930);
		$(".biao li").eq(index+1).addClass("active").siblings().removeClass("active");
		index++;
		if(index==($(".con li").length)){
			index=0;
			$(".con li").eq(index).animate({"left":0},1000);
			$(".biao li").eq(index).addClass("active").siblings().removeClass("active");
		}
	},3000)
	
	
})

$(function(){
				$.get("data1.json",function(data){					
					var data = data;					
					var html = template("tabs",data);
					document.getElementById("content1").innerHTML=html;
					$(".list li").on("mouseover",function(){
						$(this).css({"background":"#20252a"}).siblings().css({"background":"#353a40"});
					var index=$(this).index();
						$(".list1").eq(index).show().siblings().hide();				
					})	
					
				})	
		})
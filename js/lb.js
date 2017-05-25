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
		
});

$(function(){
				$.get("../json/data2.json",function(data){					
					var data = data;
					console.log(data)		
					var html_1 = template("pics",data);
					var html_2 = template("pics",data);
					document.getElementById("article3_div_ul").innerHTML=html_1;					
					document.getElementById("aside3_div_ul").innerHTML=html_2;
				
				})
});

$(function(){
				$.get("../json/data2.json",function(data){					
					var data = data;
					console.log(data)		
					var html_2 = template("picss",data);					
					document.getElementById("aside3_div_ul").innerHTML=html_2;
				
				})
});


$(function(){
				$.get("../json/data1.json",function(data){					
					var data = data;					
					var html = template("tabs",data);
					document.getElementById("content1").innerHTML=html;
					$(".list li").on("mouseover",function(){
						$(this).css({"background":"#20252a"}).siblings().css({"background":"#353a40"});
					var index=$(this).index();
						$(".list1").eq(index).show().siblings().hide();				
					})	
					
				})	
});
$(function(){
	var oCon_aside=document.getElementsByClassName("con_aside")[0];	
	var aLi=oCon_aside.getElementsByTagName("li");	
	for(var i=0;i<aLi.length;i++){
		aLi[i].style.backgroundPositionY=-i*48+'px';
	}
		
});

function fix_zhihu(){
	//点击显示全部按钮
	$(document).on("click",".zh-summary",function(){
		$(".open_tools").remove();
		//样式控制
		$p = $(this).parents(".feed-item");
		//获取面板元素并预置open_tools
		$h = $p.find(".zm-meta-panel").html();
		$p.find(".zm-meta-panel").prepend('<div class="open_tools"></div>');

		//获取下一条目标题
		$h2 = $p.next(".feed-item").find("h2").text();
		$h2_link = $p.next(".feed-item").find("h2").find("a").attr("href");
		$item = $h + '<div class="next_item">下一问题：<a class="link" href="javascript:;" title="' + $h2 + '">' + $h2 + '</a>' + '<a target="_blank" href=' + $h2_link +'>新窗口</a>'+ '</div>';

		$(".open_tools").append($item);
		$(".open_tools").find('a[name="addcomment"]').attr("class","zz").attr("href","javascript:;");
		$(".open_tools").find('a[name="share"]').remove();
		$(".open_tools").find("span").remove();
		$(".open_tools").find("a.copyright").remove();
		// $(".open_tools").find("div").remove();
		$(".open_tools").find("button").remove();

	});

	//评论
	$(document).on("click",'a[name="addcomment"]',function(){
		$top = $(this).parents(".feed-item").find(".toggle-comment:last").offset().top;
		// console.log($top);
		$("body").animate({
			scrollTop: $top - 30
		},1000,function(){
			$(".open_tools").fadeOut(300);
		});
	});

	//下一条目
	$(document).on("click",".next_item .link",function(){
		$top = $(this).parents(".feed-item").next(".feed-item").offset().top;
		// console.log($top);
		$("body").animate({
			scrollTop: $top
		},1000,function(){
			$(".open_tools").fadeOut(300);
		});
	});

	//收起按钮动作
	$(document).on("click",".js-collapse",function(){
		$(".open_tools").remove();
	});

	//滚动事件
	$(window).bind("scroll", function(){
		var $s = $(document).scrollTop();
		//判断是否存在open_tools
		if ( $(".is-sticky").length > 0 ) {
			$c = $(".is-sticky").css("left");
			$(".open_tools").fadeIn(300);
			// console.log($c);
		} else {
			$(".open_tools").fadeOut(300);
			return false;
		};
	});
};

fix_zhihu();
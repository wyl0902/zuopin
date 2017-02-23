$('#dowebok').fullpage({
		scrollingSpeed: 700,
		css3: true,
		resize: true,
		anchors: ["page1","page2","page3","page4"],
		verticalCentered: false,
		afterRender: function(){
			$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
			$("#home_info1").fadeIn(700,function(){
				$('#home_info_box').animate({width:"600px"},800,function(){
					$("#home_info2").fadeIn(400,function(){
						$(this).next().fadeIn(400,function(){
							$(this).next().fadeIn(450,function(){
								$(this).next().fadeIn(450,function(){
									$(this).next().fadeIn(450,function(){
										$("aside").fadeIn(200);
									});
								});
							});
						});
					});
				});
			});
		},
		afterLoad: function(anchorLink,index){
			if(index==1){
				$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
			}
			if(index==2){
				$("aside a").eq(1).addClass("selected").siblings().removeClass("selected");
				$("#about_content h1").after("<div class='title_en'><h2>· About me ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
				$('#about_info p').animate({
					bottom:0
				},2000);
	
			}
			if(index==3){
				$("aside a").eq(2).addClass("selected").siblings().removeClass("selected");
				$("#skill_content h1").after("<div class='title_en'><h2>· Skill ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				})
				setTimeout(function(){
					$('.skill_j').css('opacity','1')
					$('.skill_list_content').css('display','block')
				},1000)
				
			}
			if(index==4){
				$("aside a").eq(3).addClass("selected").siblings().removeClass("selected");
				$("#demo_content h1").after("<div class='title_en'><h2>· DEMO ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				$('#demo_list li').eq(0).fadeIn(400,function(){
					this.style.transform='rotate(360deg)';
					$(this).next().fadeIn(400,function(){
						this.style.transform='rotate(360deg)';
						$(this).next().fadeIn(400,function(){
							this.style.transform='rotate(360deg)';
							$(this).next().fadeIn(400,function(){
								this.style.transform='rotate(360deg)'
							})
						})
					})
				})
				$('#demo_list li').css('overflow','hidden')
				console.log()
			}
		},
		onLeave:function(index){
			if(index==2||index==3||index==4){
				$(".title_en").remove();	
			}
		}
	});
	
//顶部标题文字切换
	$("#header_p").mouseover(function(){
		$("#header_p1").html("Resume");
		$("#header_p2").html("前端工程师");
	}).mouseout(function(){
		$("#header_p1").html("F2E");
		$("#header_p2").html("个人简历");	
	});
	
//顶部导航取消
	$("header nav a:not(':first')").click(function(){
		alert("正在努力建设中...请稍等");
		return false;
	});
//技能栏 切换
$(".skill_icon").click(function(){
		$(".skill_int").each(function(){
			console.log($(this))
			if($(this).is(":visible")){
				console.log($(this))
				$(this).slideUp(200);
				$(this).prev().removeClass("onoffg");
			}
		});
		if($(this).siblings(".skill_int").is(":hidden")){
			$(this).siblings(".skill_int").slideDown(400);
			$(this).siblings(".skill_flag").addClass("onoffg");
		}else{
			$(this).siblings(".skill_int").slideUp(200);
			$(this).siblings(".skill_flag").removeClass("onoffg");
		}
	});
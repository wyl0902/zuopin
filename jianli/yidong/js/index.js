$(function(){
	page1();
	function page1(){
		var html=`<div id='page1'>
				<ul id='list'>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li ></li>
					<li></li>
					<li>
						<div class='zi'>
							<p>过往那些平淡的场景</p>
							<p>因为你的存在</p>
							<p>变成了我最美好的回忆</p>
						</div>
					</li>
				</ul>
				<div id='next'></div>
			</div>`;
		$('#page_one').html(html);
		$('#page_one').fadeIn(1000,function(){
		
		$('#list li').eq(0).fadeIn(20,function(){
			$(this).css('transform','scale(1)')
			$(this).next().fadeIn(20,function(){
				$(this).css('transform','scale(1)')
				$(this).next().fadeIn(20,function(){
					$(this).css('transform','scale(1)')
					$(this).next().fadeIn(20,function(){
						$(this).css('transform','scale(1)')
						$(this).next().fadeIn(20,function(){
							$(this).css('transform','scale(1)')
							$(this).next().fadeIn(20,function(){
								$(this).css('transform','scale(1)')
								$(this).next().fadeIn(20,function(){
									$(this).css('transform','scale(1)')
									$(this).next().fadeIn(20,function(){
										$(this).css('transform','scale(1)')
										$(this).next().fadeIn(20,function(){
											$(this).css('transform','scale(1)')
											$(this).next().fadeIn(20,function(){
												$(this).css('transform','scale(1)')
												$(this).next().fadeIn(20,function(){
													$(this).css('transform','scale(1)')
													$(this).next().fadeIn(20,function(){
														$(this).css('transform','scale(1)')
														$(this).next().fadeIn(20,function(){
															$(this).css('transform','scale(1) rotateZ(90deg)')
															$(this).animate({
																left:200
															},1500,function(){
																$(this).next().fadeIn(20,function(){
																	$(this).css('transform','scale(1)')
																	$('#next').css('opacity','1')
																})
															})
														})
													})
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})
	})
		$('#next').on('click',function(){
			page2()
		});
		function page2(){
			var html2=`<ul id='list1'>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li>
					<div class='zi'>
						<p>过往那些平淡的场景</p>
						<p>因为你的存在</p>
						<p>变成了我最美好的回忆</p>
					</div>
				</li>
			</ul>`;
			$('#page_two').html(html2)
			$('#page_one').fadeOut(100,function(){
				$('#page_two').fadeIn(100,function(){
					$('#list1 li').eq(0).fadeIn(200,function(){
						$(this).animate({
							opacity:1
						},500,function(){
							$(this).css('transform','scale(1) rotateZ(12deg)')
						});
						$(this).next().fadeIn(200,function(){
							$(this).animate({
								opacity:1
							},500,function(){
								$(this).css('transform','scale(1) rotateZ(46deg)')
							});
							$(this).next().fadeIn(200,function(){
								$(this).animate({
									opacity:1
								},500,function(){
									$(this).css('transform','scale(1) rotateZ(332deg)')
								});
								$(this).next().fadeIn(200,function(){
									$(this).animate({
										opacity:1
									},500,function(){
										$(this).css('transform','scale(1) rotateZ(322deg)')
									});
									$(this).next().fadeIn(200,function(){
										$(this).animate({
											opacity:1
										},500,function(){
											$(this).css('transform','scale(1) rotateZ(330deg)')
										});
										$(this).next().fadeIn(200,function(){
											$(this).animate({
												opacity:1
											},500,function(){
												$(this).css('transform','scale(1) rotateZ(17deg)')
											});
											$(this).next().fadeIn(200,function(){
												$(this).animate({
													opacity:1
												},500,function(){
													$(this).css('transform','scale(1)')
												});
												$(this).next().fadeIn(200,function(){
													$(this).animate({
														opacity:1
													},500,function(){
														$(this).css('transform','scale(1)rotateZ(90deg)')
														var _this=this;
														setTimeout(function(){
															$(_this).animate({
																left:400
															},2000,function(){
																$(_this).next().fadeIn(200,function(){
																	$(this).animate({
																		opacity:1
																	},500);
																	$(this).next().fadeIn(100,function(){
																		$(this).animate({
																			opacity:1
																		},500);
																		$(this).next().fadeIn(200,function(){
																			$(this).animate({
																				opacity:1
																			},300);
																		})
																	})
																})
															})
														},400)
													});
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
			$('#list1 li').eq(9).on('click',function(){
				$('#page_two').fadeOut(100,function(){
					$('#page_one').fadeIn(100,function(){
						page1()
					});					
				})
			})
			$('#list1 li').eq(10).on('click',function(){
				page3();
			})
			function page3(){
				var html3=`<div id='page3'>
								<ul id='list3'>
									<li></li>
									<li></li>
									<li>
										<div class='zi'>
											<p>见了我就脸红</p>
											<p>我坐在你旁边</p>
											<p>永远看不够你</p>
										</div>
									</li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
									<li></li>
								</ul>
							</div>`;
						$('#page_three').html(html3)	
				$('#page_two').fadeOut(100,function(){
					$('#page_three').fadeIn(100,function(){
						$('#list3 li').eq(0).fadeIn(100,function(){
							$(this).animate({
								opacity:0.5,
								left:228
							},3000,function(){
//								$(this).animate({
//									left:200
//								},2000)
							})
						})
						$('#list3 li').eq(1).fadeIn(10,function(){
							$(this).animate({
								opacity:1,
								left:-200
							},3000)
							$(this).next().fadeIn(100,function(){
								$(this).animate({
									opacity:1,
									top:70
								},2000,function(){
									
								})
							})
							$(this).next().next().fadeIn(100,function(){
								$(this).animate({
									opacity:1,
									left:50
								},4000,function(){
									$(this).next().fadeIn(1000,function(){
										$(this).css('opacity','1');
										$(this).next().fadeIn(1000,function(){
											$(this).css('opacity','1');
											$(this).css('transform','rotateZ(351deg) scale(1)');
											$(this).next().fadeIn(400,function(){
												$(this).css('opacity','1');
												$(this).next().fadeIn(400,function(){
													$(this).css('opacity','1');
												})
												$(this).next().next().fadeIn(400,function(){
													$(this).css('opacity','1');
												})
											})
										})
									})
								})
							})
						})
//						
					});
					
				});
				$('#list3 li').eq(7).on('click',function(){
					$('#page_two').fadeOut(100,function(){
						page2()
					})
				})
				$('#list3 li').eq(8).on('click',function(){
						page4();
				});
				function page4(){
					var html4=`<div id='page4'>
									<ul id='list4'>
										<li></li>
										<li></li>
										<li>大学四年</li>
										<li>有个人给你绑了四年鞋带了</li>
										<li></li>
										<li></li>
										<li></li>
										<li></li>
										<li></li>
										<li></li>
										<li></li>
									</ul>
								</div>`;
					$('#page_four').html(html4)
					$('#page_three').fadeOut(100,function(){
						$('#page_four').fadeIn(100,function(){
							$('#list4 li').eq(0).fadeIn(100,function(){
								$(this).animate({
								    opacity:1,
								    left:200
							    },3000,function(){
							    })
							});
							$('#list4 li').eq(1).fadeIn(100,function(){
								$(this).animate({
								    opacity:1,
								    left:-208
							    },3000)
								$(this).next().fadeIn(100,function(){
									$(this).animate({
										opacity:1,
										top:170
									},1000,function(){
										$(this).next().fadeIn(100,function(){
											$(this).animate({
												opacity:1,
												top:200
											},1000,function(){
												
											})
										})
									})
								})
								$(this).next().next().next().fadeIn(100,function(){
									$(this).animate({
										opacity:1,
										left:70
									},4000,function(){
										$(this).next().fadeIn(1000,function(){
											$(this).css('opacity','1');
											$(this).next().fadeIn(1000,function(){
												$(this).css('opacity','1');
												$(this).css('transform','rotateZ(354deg) scale(1)');
												$(this).next().fadeIn(400,function(){
													$(this).css('opacity','1');
													$(this).animate({
														left:184
													},500)
													$(this).next().fadeIn(400,function(){
														$(this).css('opacity','1');
													})
													$(this).next().next().fadeIn(400,function(){
														$(this).css('opacity','1');
													})
												})
											})
										})
									})
								})
							})
						})
					});
					$('#list4 li').eq(8).on('click',function(){
						$('#page_three').fadeOut(100,function(){
							page3()
						})
					})
					$('#list4 li').eq(9).on('click',function(){
//							page4();
					});
				}
			}
		}
	}
	
	
	
})

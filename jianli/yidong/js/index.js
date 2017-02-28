$(function(){
	var onoff=false;
	$('#bgm').on('click',function(){
		if(onoff){
			$('#aud')[0].play()   //播放
		}else{
			$('#aud')[0].pause()  //暂停
		}
		onoff=!onoff
	})
	page1();
	function page1(){  //第一页
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
			$(this).css('-webkit-transform','scale(1)')
			$(this).css('transform','scale(1)');
			$(this).next().fadeIn(20,function(){
				$(this).css('-webkit-transform','scale(1)')
				$(this).css('transform','scale(1)')
				$(this).next().fadeIn(20,function(){
					$(this).css('-webkit-transform','scale(1)')
					$(this).css('transform','scale(1)')
					$(this).next().fadeIn(20,function(){
						$(this).css('-webkit-transform','scale(1)')
						$(this).css('transform','scale(1)')
						$(this).next().fadeIn(20,function(){
							$(this).css('-webkit-transform','scale(1)')
							$(this).css('transform','scale(1)')
							$(this).next().fadeIn(20,function(){
								$(this).css('-webkit-transform','scale(1)')
								$(this).css('transform','scale(1)')
								$(this).next().fadeIn(20,function(){
									$(this).css('-webkit-transform','scale(1)')
									$(this).css('transform','scale(1)')
									$(this).next().fadeIn(20,function(){
										$(this).css('-webkit-transform','scale(1)')
										$(this).css('transform','scale(1)')
										$(this).next().fadeIn(20,function(){
											$(this).css('-webkit-transform','scale(1)')
											$(this).css('transform','scale(1)')
											$(this).next().fadeIn(20,function(){
												$(this).css('-webkit-transform','scale(1)')
												$(this).css('transform','scale(1)')
												$(this).next().fadeIn(20,function(){
													$(this).css('-webkit-transform','scale(1)')
													$(this).css('transform','scale(1)')
													$(this).next().fadeIn(20,function(){
														$(this).css('-webkit-transform','scale(1)')
														$(this).css('transform','scale(1)')
														$(this).next().fadeIn(20,function(){
															$(this).css('-webkit-transform','scale(1) rotateZ(90deg)')
															$(this).css('transform','scale(1) rotateZ(90deg)')
															$(this).animate({
																left:200
															},1500,function(){
																$(this).next().fadeIn(20,function(){
																	$(this).css('-webkit-transform','scale(1)')
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
		function page2(){  // 第二页
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
			$('#page_one').fadeOut(1500,function(){
				$('#page_two').fadeIn(100,function(){
					$('#list1 li').eq(0).fadeIn(200,function(){
						$(this).animate({
							opacity:1
						},500,function(){
							$(this).css('-webkit-transform','scale(1) rotateZ(12deg)')
							$(this).css('transform','scale(1) rotateZ(12deg)')
						});
						$(this).next().fadeIn(200,function(){
							$(this).animate({
								opacity:1
							},500,function(){
								$(this).css('-webkit-transform','scale(1) rotateZ(46deg)')
								$(this).css('transform','scale(1) rotateZ(46deg)')
							});
							$(this).next().fadeIn(200,function(){
								$(this).animate({
									opacity:1
								},500,function(){
									$(this).css('-webkit-transform','scale(1) rotateZ(332deg)')
									$(this).css('transform','scale(1) rotateZ(332deg)')
								});
								$(this).next().fadeIn(200,function(){
									$(this).animate({
										opacity:1
									},500,function(){
										$(this).css('-webkit-transform','scale(1) rotateZ(322deg)')
										$(this).css('transform','scale(1) rotateZ(322deg)')
									});
									$(this).next().fadeIn(200,function(){
										$(this).animate({
											opacity:1
										},500,function(){
											$(this).css('-webkit-transform','scale(1) rotateZ(330deg)')
											$(this).css('transform','scale(1) rotateZ(330deg)')
										});
										$(this).next().fadeIn(200,function(){
											$(this).animate({
												opacity:1
											},500,function(){
												$(this).css('-webkit-transform','scale(1) rotateZ(17deg)')
												$(this).css('transform','scale(1) rotateZ(17deg)')
											});
											$(this).next().fadeIn(200,function(){
												$(this).animate({
													opacity:1
												},500,function(){
													$(this).css('-webkit-transform','scale(1)')
													$(this).css('transform','scale(1)')
												});
												$(this).next().fadeIn(200,function(){
													$(this).animate({
														opacity:1
													},500,function(){
														$(this).css('-webkit-transform','scale(1)rotateZ(90deg)')
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
			function page3(){   //第三页
				var html3=`<div id='page3'>
								<ul id='list3'>
									<li></li>
									<li></li>
									<li>
										<div class='zi'>
											<p>你坐在我旁边</p>
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
								opacity:1,
								left:228
							},3000,function(){
//								$(this).animate({
//									left:200
//								},2000)
							})
						})
						$('#list3 li').eq(1).fadeIn(100,function(){
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
											$(this).css('-webkit-transform','rotateZ(351deg) scale(1)');
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
				function page4(){   //第四页
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
										top:'20%'
									},500,function(){
										$(this).next().fadeIn(100,function(){
											$(this).animate({
												opacity:1,
												top:'25%'
											},500,function(){
												
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
												$(this).css('-webkit-transform','rotateZ(354deg) scale(1)');
												$(this).css('transform','rotateZ(354deg) scale(1)');
												$(this).next().fadeIn(400,function(){
													$(this).css('opacity','1');
													$(this).animate({
														left:184
													},1000)
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
							page3();
						})
					})
					$('#list4 li').eq(9).on('click',function(){
							page5();
					});
					function page5(){     //第五页
						var html5=`<div id='page5'>
										<ul id='list5'>
											<li></li>
											<li></li>
											<li>
												<div class='zi'>
													<p>我们一起在大城市打拼</p>
													<p>十平米的房间里</p>
													<p>我们挤着一张单人床</p>
												</div>
											</li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
										</ul>
									</div>`;
						$('#page_five').html(html5)
						$('#page_four').fadeOut(100,function(){
							$('#page_five').fadeIn(100,function(){
								$('#list5 li').eq(1).fadeIn(400,function(){
									$(this).css('opacity','1');
									$('#list5 li').eq(0).fadeIn(1000,function(){
										$(this).css('opacity','1');
										$(this).next().next().fadeIn(200,function(){
//											$(this).css('opacity','1');
											$(this).animate({
												left:150
											},800,function(){
												var _this=this
												setTimeout(function(){
													$(_this).next().fadeIn(400,function(){
														$(this).css('opacity','1');
														$(this).next().fadeIn(400,function(){
															$(this).css('opacity','1');
															$(this).css('transition','1s 2s');
															$(this).css('-webkit-transform','rotateZ(345deg) scale(1)');
															$(this).css('transform','rotateZ(345deg) scale(1)');
															$(this).next().fadeIn(3000,function(){
																$(this).css('opacity','1');
																$(this).animate({
																	left:200
																},1000)
																$(this).next().fadeIn(400,function(){
																	$(this).css('opacity','1');
																})
																$(this).next().next().fadeIn(400,function(){
																	$(this).css('opacity','1');
																})
															})
														})
													})
												},2000)
											})
										})
									})
								})
							})
								
						});
						$('#list5 li').eq(6).on('click',function(){
							$('#page_four').fadeOut(100,function(){
								page4();
							})
						})
						$('#list5 li').eq(7).on('click',function(){
								page6();
						});
						function page6(){       //第六页
							var html6=`<div id='page6'>
											<ul id='list6'>
												<li></li>
												<li></li>
												<li>
													<div class='zi'>
														<p>最温馨的时刻</p>
														<p>我们有了自己真正的家</p>
													</div>
												</li>
												<li></li>
												<li></li>
												<li></li>
												<li></li>
												<li></li>
											</ul>
										</div>`;
							$('#page_six').html(html6)			
							$('#page_five').fadeOut(100,function(){
								$('#page_six').fadeIn(100,function(){
									$('#list6 li').eq(0).fadeIn(100,function(){
										$(this).animate({
											left:'-202',
											opacity:'1'
										},1000)
										$(this).next().next().fadeIn(100,function(){
											$(this).css('opacity','1')
										})
										$(this).next().fadeIn(100,function(){
											$(this).animate({
												left:'-25',
												opacity:'1'
											},2000,function(){
												var _this=this;
												setTimeout(function(){
													$(_this).next().next().fadeIn(100,function(){
														$(this).css('opacity','1');
														$(this).next().fadeIn(400,function(){
															$(this).css('opacity','1');
															$(this).css('transition','1s 3s');
															$(this).css('-webkit-transform','rotateZ(17deg) scale(1)');
															$(this).css('transform','rotateZ(17deg) scale(1)');
															$(this).next().fadeIn(4000,function(){
																$(this).css('opacity','1');
																$(this).animate({
																	left:240
																},1000)
																$(this).next().fadeIn(400,function(){
																	$(this).css('opacity','1');
																})
																$(this).next().next().fadeIn(400,function(){
																	$(this).css('opacity','1');
																})
															})
														})
													})
												},2000)
											})
										})
										
									})
								})
							});
							$('#list6 li').eq(6).on('click',function(){
								$('#page_five').fadeOut(100,function(){
									page5();
								})
							})
							$('#list6 li').eq(7).on('click',function(){
									page7();
							});
							function page7(){    //第七页
								var html7=`<div id='page7'>
										<ul id='list7'>
											<li></li>
											<li></li>
											<li>你说</li>
											<li>两个人一条狗</li>
											<li>就差个娃了</li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
											<li></li>
										</ul>
									</div>`;
								$('#page_seven').html(html7)
								$('#page_six').fadeOut(100,function(){
									$('#page_seven').fadeIn(100,function(){
										$('#list7 li').eq(0).fadeIn(100,function(){
											$(this).css('opacity','1');
											$(this).next().fadeIn(100,function(){
												$(this).css('opacity','1');
												$(this).css('-webkit-transform','rotateY(0deg)');
												$(this).css('transform','rotateY(0deg)');
												$(this).next().fadeIn(100,function(){
													$(this).css('opacity','1');
													$(this).css('-webkit-transform','rotateY(0deg)');
													$(this).css('transform','rotateY(0deg)');
													$(this).next().fadeIn(100,function(){
														$(this).css('opacity','1');
														$(this).css('-webkit-transform','rotateY(0deg)');
														$(this).css('transform','rotateY(0deg)');
														$(this).next().fadeIn(100,function(){
															$(this).css('opacity','1');
															$(this).css('-webkit-transform','rotateY(0deg)');
															$(this).css('transform','rotateY(0deg)');
															var _this=this;
															setTimeout(function(){
																$(_this).next().fadeIn(100,function(){
																	$(this).css('opacity','1');
																	$(this).next().fadeIn(100,function(){
																		$(this).css('opacity','1');
																		$(this).css('transition','1s 3s');
																		$(this).css('-webkit-transform','rotateZ(10deg) scale(1)');
																		$(this).css('transform','rotateZ(10deg) scale(1)');
																		$(this).next().fadeIn(4000,function(){
																			$(this).css('opacity','1');
																			$(this).animate({
																				left:250
																			},1000)
																			$(this).next().fadeIn(400,function(){
																				$(this).css('opacity','1');
																			})
																			$(this).next().next().fadeIn(400,function(){
																				$(this).css('opacity','1');
																			})
																		})
																	})
																})
															},3000)
															
														})
													})
												})
											
												
											});
											
											
										})
									})
								});
								$('#list7 li').eq(8).on('click',function(){
									$('#page_six').fadeOut(100,function(){
										page6();
									})
								})
								$('#list7 li').eq(9).on('click',function(){
										page8();
								});
								function page8(){  //第八页
									var html8=`<div id='page8'>
													<ul id='list8'>
														<li></li>
														<li>
															<div class='zi'>
																<p>你像孩子一样</p>
																<p>要在睡前听我讲故事</p>
																<p>而我最喜欢我们的故事</p>
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
									$('#page_eight').html(html8)			
									$('#page_seven').fadeOut(100,function(){
										$('#page_eight').fadeIn(100,function(){
											$('#list8 li').eq(0).fadeIn(400,function(){
												$(this).css('opacity','1');
												$(this).next().fadeIn(400,function(){
													$(this).css('opacity','1');
													$(this).next().fadeIn(400,function(){
														$(this).css('opacity','1');
														var _this=this
														setTimeout(function(){
															$(_this).next().fadeIn(400,function(){
																$(this).css('opacity','1');
																$(this).next().fadeIn(200,function(){
																	$(this).css('opacity','1');
																	$(this).css('transition','1s 3s');
																	$(this).css('-webkit-transform','scale(1)');
																	$(this).css('transform','scale(1)');
																	$(this).next().fadeIn(4000,function(){
																		$(this).css('opacity','1');
																		$(this).animate({
																			left:250
																		},1000)
																		$(this).next().fadeIn(400,function(){
																			$(this).css('opacity','1');
																		})
																		$(this).next().next().fadeIn(400,function(){
																			$(this).css('opacity','1');
																		})
																	})
																})
															})
														},3000)
													})
												})
											})
										})
									});
									$('#list8 li').eq(6).on('click',function(){
										$('#page_seven').fadeOut(100,function(){
											page7();
										})
									})
									$('#list8 li').eq(7).on('click',function(){
											page9();
									});
									function page9(){   //第九页
										var html9=`<div id='page9'>
														<ul id='list9'>
															<li></li>
															<li></li>
															<li></li>
															<li></li>
															<li></li>
															<li></li>
															<li></li>
														</ul>
													</div>`;
										$('#page_nine').html(html9)			
										$('#page_eight').fadeOut(100,function(){
											$('#page_nine').fadeIn(100,function(){
												$('#list9 li').eq(0).fadeIn(100,function(){
													$(this).css('top','0')
													$(this).css('opacity','1')
												})
												$('#list9 li').eq(1).fadeIn(100,function(){
													$(this).css('bottom','0')
													$(this).css('opacity','1')
													$(this).next().fadeIn(100,function(){
														$(this).css('opacity','1')
													})
													$(this).next().next().fadeIn(100,function(){
														$(this).css('opacity','1');
														$(this).next().fadeIn(100,function(){
															$(this).css('opacity','1');
														})
														$(this).next().next().fadeIn(100,function(){
															$(this).css('opacity','1');
														})
														$(this).next().next().next().fadeIn(100,function(){
															$(this).css('opacity','1');
														})
														
													})
												})
											})
										})
									}
								}
							}
						}
					}
				}
			}
		}
	}
	
	
	
})

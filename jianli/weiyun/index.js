(function(){
	var datas=data.files;
	var left=document.querySelector('.left');
//	-------------------渲染树形菜单-----------------------------------
	function creatTreeHtml(id){
		var childs=handle.getChildsById(datas,id);  //找自己下面的子元素
//		console.log(childs)
		var html='<ul>';
		childs.forEach(function(value){    
			var parentLen=handle.getParentsById(datas,id).length;   //父级元素集合的长度
//			console.log(parentLen)
			html+='<li class="clearfix "  ><h2  class="select"  style="padding-left:'+parentLen*28+'px;" data-id="'+value.id+'"><em></em><span></span>'+value.title+'</h2>';
			html+=creatTreeHtml(value.id);  //递归 创建菜单
			html+='</li>';
		})
		html+='</ul>';
		return html;
	}
	left.innerHTML=creatTreeHtml(-1);    //树形菜单渲染
	
//	---------------------渲染导航栏---------------------------------------------------
	var  nav=document.querySelector('.right_head nav')
	function creatNavHtml(id){ 
		var parents=handle.getParentsById(datas,id).reverse();      //找到父级元素集合
		var navhtml='';
		parents.forEach(function(value){     //生成导航
			navhtml+='<a href="javascript:;" data-id='+value.id+'>'+value.title+'</a><span></span>'
		})                            
		return navhtml;
	} 
	nav.innerHTML=creatNavHtml(0);       //渲染导航
	xiaodiantou();   //消除最后一个元素后面的三角箭头；
	
	          //  
	function getTreeById(id){  //
		var treeTitle = left.querySelectorAll(".select");
		for( var i = 0; i < treeTitle.length; i++ ){
			if( treeTitle[i].dataset.id == id ){
				return treeTitle[i];
			}
		}
	}
	t.addClassName(getTreeById(0),"wei");  //给树形菜单初始化加背景
	
	//---------------------渲染文件菜单--------------------------------
	
	var rightContent=document.querySelector('.right_cont');
	function createContentHtml(id){
		var childs=handle.getChildsById(datas,id)   
		var str='';
		childs.forEach(function(value){
			str+='<li data-id='+value.id+' class="xuan"><i class="ze"></i><img src="img/tu1.png" /><input type="text"/><div>'+value.title+'</div></li>'
		})
		return str;
	}
	rightContent.innerHTML=createContentHtml(0);
	
	function xiaodiantou(id){  //消除导航箭头     
		var spans=nav.getElementsByTagName('span');
		var as=nav.getElementsByTagName('a');
		as[as.length-1].style.borderBottom='2px solid  #51b3da';
		as[as.length-1].style.color='#53aedb';
		spans[spans.length-1].style.background='none';
	}
	
//	-------------------各个区域的页面交互-------------------------------------------------
//1. 树形菜单区域
	var currentId=0;
	function rend(){
		if(childs.length){      //文件区有文件或没文件背景
	   		rightContent.style.background='';
	   }else{
	   		rightContent.style.background='#f6f7fb url(img/no.png) no-repeat 345px 120px';
	   }
	   t.removeClassName(divQ,'act'); //清除全选框
	}
	//利用事件委托。给最外层的父级添加点击处理
	t.on(left,'click',function(ev){
		var target=ev.target;            //获取事件源
		if(target=t.parent(target,'.select')){  
			var zId=target.dataset.id;
			t.removeClassName(getTreeById(currentId),'wei');
			t.addClassName(getTreeById(zId),'wei');
			currentId=zId;
			nav.innerHTML=creatNavHtml(zId);
		   var childs=handle.getChildsById(datas,zId);
		   rightContent.innerHTML=createContentHtml(zId);
		   	rend();
			xiaodiantou();
		}
	})
//	------------------------------------------------------------------
	
	//2.导航区域；
	t.on(nav,'click',function(ev){
		var target=ev.target;
		if(target.nodeName=='A'){
			var zId=target.dataset.id;
			 t.removeClassName(getTreeById(currentId),'wei');
			t.addClassName(getTreeById(zId),'wei');
			currentId=zId;
			nav.innerHTML=creatNavHtml(zId);
		   var childs=handle.getChildsById(datas,zId);
		   rightContent.innerHTML=createContentHtml(zId)
		   	rend();
			xiaodiantou();
		}
		
	})
	
//	------------------------------------------------------------------

//2.文件区域；
	var divQ=document.querySelector('.right_head div');	
	var acts=rightContent.getElementsByClassName('ze');
	var xuans=rightContent.getElementsByClassName('xuan');
	var arr=[];
	function del() {   //获取选中的勾选class='aatc'的li;
	return	Array.from(acts).filter(function(value){
			return t.hasClassName(value,'aact');
		}).map(function(item){
			return item.parentNode;
		})
		
	}
	t.on(rightContent,'mouseup',function(ev){
		if(ev.which!=1) return
		var target=ev.target;      
		if(t.parent(target,'.ze')){   //寻找最进的class叫ze的元素；  勾选
			target=t.parent(target,'.ze');
		    t.toggleClass(target,'aact');    //如果有‘aact’就删除,没有就加上
		    t.toggleClass(target.parentNode,'act');
			var bls= Array.from(acts).every(function(value){   //要是全都为'aact',返回true;否则 false;
				return t.hasClassName(value,"aact");
			})
			if(bls){
				t.addClassName(divQ,'act');
			}else{
				t.removeClassName(divQ,'act');
			}
			del();  //获取名为'aact'的集合
		}else if(target=t.parent(target,'.xuan')){//进入
				var zId=target.dataset.id;
				t.removeClassName(getTreeById(currentId),'wei');
				t.addClassName(getTreeById(zId),'wei');
				currentId=zId;
				nav.innerHTML=creatNavHtml(zId);
			   var childs=handle.getChildsById(datas,zId);
			   rightContent.innerHTML=createContentHtml(zId);
			    rend();
				xiaodiantou();
				;  //进去下一页  清除全选框
			}
//		 e.stopPropagation;
		})
//	------------------------------全选--------------------------------------	
    t.on(divQ,'click',function(ev){
    	var childs=handle.getChildsById(datas,currentId);
    	if(childs.length==0){
    		return;
    	};
    	var bl=t.toggleClass(this,'act');   //删除添加
    	Array.from(acts).forEach(function(value,index){  
    		if(bl){                        //如果没有   加上class
    			t.addClassName(value,'aact');
    			t.addClassName(xuans[index],'act');
    		}else{                             //如果有   删除class
    			t.removeClassName(value,'aact');   
    			t.removeClassName(xuans[index],'act');
    		}
    	})
    	del();
    })
//  ------------------------------新建------------------------------------------------

	function shanglakuang(){   //上面弹框
		div1.style.transition='none'    
		div1.style.top=-40+'px';
		div1.style.transition='0.3s'
		setTimeout(function(){
			div1.style.top=0+'px';
		},0);
	div1.timer=setTimeout(function(){
			div1.style.top=-40+'px';
			clearTimeout(div1.timer);
		},1200)
	}
	function shifucunzai(divs,inpu){      //如果输入的内容在 当前文件名没有 则返回false 否则 返回 true 下标;
	return Array.from(divs).findIndex(function(item){
				return item.innerHTML==inpu.value;
			})==-1? false:true;
	}
	var xinjian = document.querySelectorAll('#fenlei nav a');
	var childs=rightContent.getElementsByTagName('div');
	var div1=document.querySelector('#box div');
	t.on(xinjian[5],'mouseup',function(e){           //新建
		var radom=Math.round(Math.random()*4000+4000);    
		var firstChild=rightContent.firstElementChild;
		var li=document.createElement('li');
		var i=document.createElement('i');
		var img=document.createElement('img');
		var inpu=document.createElement('input');
		var div=document.createElement('div');
		div.style.display='none';
		div.className="divc";
		li.appendChild(i);
		i.className='ze';
		li.className='xuan act';
		inpu.type='text';
		inpu.style.display='block'
		inpu.style.textAlign='center'
		inpu.style.marginTop='14px'
		img.src='img/tu1.png';
		
		li.appendChild(img);
		
		li.appendChild(inpu);
		li.appendChild(div);
		if(!firstChild){     //新建插到最前面
			rightContent.appendChild(li);
			rightContent.style.background='';
		}else{
			rightContent.insertBefore(li,firstChild);
		}
		inpu.focus();            //inpu获取焦点；
		inpu.onblur=function(){        //失焦点事件
			if(inpu.value.trim()=='' ||shifucunzai(childs,inpu)){  //inpu内容空 或者  inpu的内容 已经在同级有了
				div1.innerHTML='文件创建失败'
					div1.className='shibai';
					shanglakuang();
				if(childs.length==0){
					rightContent.style.background='#f6f7fb url(img/no.png) no-repeat 345px 120px';
				}
				rightContent.removeChild(li);
			}else{
				div1.innerHTML='文件创建成功'
				div1.className='tan';
				shanglakuang();
				li.className='xuan';
				div.innerHTML=inpu.value;
				inpu.style.display='none'
				div.style.display='block'
				li.setAttribute('data-id',radom);    //添加自定义Id;
				datas.unshift({                   //在数据最前面添加数据
					id:radom,
					pid:currentId,
					title:div.innerHTML,
					type:'file'
				})
				left.innerHTML=creatTreeHtml(-1);
				t.removeClassName(getTreeById(currentId),'wei');
				t.addClassName(getTreeById(radom),'wei');
			}
			inpu.onblur=null;
		}
		e.stopPropagation;
	})
	document.onkeyup=function(e){
		if(e.keyCode==13){
			var firstChild=rightContent.firstElementChild;
	    	if(firstChild){
	    		var inpu=firstChild.getElementsByTagName('input');
	   	 		inpu[0].blur()
    		}
		}
	}
//	----------------------------删除-------------------------------

	function gouxuan(){
	return	Array.from(acts).filter(function(value){
			return value.className=='aact';
		})
	}
	var dels=document.querySelector('#box .del')
	var spandels=document.querySelectorAll('.del span')
	t.on(xinjian[4],'click',function(){
		var selec=del();
		if(selec!=0){
			new Dialog({        //弹框
				title:'删除文件',
				content:'是否要删除选中文件',
				left:null,
				top:null,
				okFn:function(){
					var idArr=[];
					for (var i = 0; i < selec.length; i++) {
						idArr.push(selec[i].dataset.id);
					}
					handle.delectChildsAll(datas,idArr);
					left.innerHTML=creatTreeHtml(-1);
					rightContent.innerHTML=createContentHtml(currentId);  
					t.addClassName(getTreeById(currentId),'wei'); 
					dels.style.display='none';
					t.removeClassName(divQ,'act');
					arr.length=0;
					if(arr.length==0){
						div1.innerHTML='文件删除成功'
						div1.className='tan';
						shanglakuang();
						if(childs.length==0){
							rightContent.style.background='#f6f7fb url(img/no.png) no-repeat 345px 120px';
						}
					}
				}
			});
			
		}else{
			div1.innerHTML='请选择文件'
			div1.className='shibai';
			shanglakuang();
		}
	})
//-------------------------------------重命名-------------------------------------------------
	var rDiv=rightContent.getElementsByTagName('div');
	var rInput=rightContent.getElementsByTagName('input');
	
	t.on(xinjian[3],'click',function(){
		var arr=del();
		if(arr.length==1){
			var hh=arr[0].children[3].innerHTML;
			console.log(arr[0].children[2])
			arr[0].children[2].style.display='block';
			arr[0].children[2].focus();
			arr[0].children[3].style.display='none';
			arr[0].children[2].value=arr[0].children[3].innerHTML.trim();
			arr[0].children[2].select();
			arr[0].children[2].onblur=function(){
				if(arr[0].children[2].value==hh){
					arr[0].children[3].style.display='block';
					arr[0].children[2].style.display='none';
					console.log(111)
				}else if(shifucunzai(childs,arr[0].children[2])){
					div1.innerHTML='命名冲突'
					div1.className='shibai';
					shanglakuang();
					arr[0].children[3].innerHTML=hh;
					arr[0].children[3].style.display='block';
					arr[0].children[2].style.display='none';
				}else{
					arr[0].children[3].style.display='block';
					arr[0].children[2].style.display='none';
					arr[0].children[3].innerHTML=arr[0].children[2].value;
					handle.getSelfById(datas,arr[0].dataset.id).title=arr[0].children[3].innerHTML;
					left.innerHTML=creatTreeHtml(-1);
					arr[0].children[2].onblur=null;
				}
			}
		}else if(arr.length<1){
			div1.innerHTML='请选择文件'
			div1.className='shibai';
			shanglakuang();
		}else{
			div1.innerHTML='请选择一个文件'
			div1.className='shibai';
			shanglakuang();
		}
		document.onkeyup=function(e){
			if(e.keyCode==13){
				var chongmin=del();
		    	if(chongmin.length==1){
		    		chongmin[0].children[2].blur();
		    	}
			}
		}
	})
//---------------------------------拖拽------------------------------------------------

    var lis=rightContent.getElementsByTagName('li');
     var createli=null;
	 var weizhuang=null;
	  var tubiao=null;
	var  isHitElement = null
    rightContent.onmousedown=function(e){
    	if(e.which!=1) return;
    	var firstChild=rightContent.firstElementChild;
    	if(firstChild){
    		var inpu=firstChild.getElementsByTagName('input');
    		inpu[0].blur()
    	}
    	var chongmin=del();
    	if(chongmin.length==1){
    		chongmin[0].children[2].blur();
    	}
    	if( !t.parent(e.target,".right_cont") ){
				return;
			}
    	var isChecked = false;
    	if( t.parent(e.target,".act") ){
				
			isChecked = !!t.parent(e.target,".act").querySelector(".aact");
		}
    	console.log(isChecked)
    	 var disX=e.clientX+window.pageXOffset;
		 var disY=e.clientY+window.pageYOffset;
		 var disW=e.clientX;
		 var disH=e.clientY;
		console.log(e.clientY)
		console.log(disY)
		document.onmousemove=function(e){
			if(isChecked){
				var selectarr=del();
				if(Math.abs(e.clientX-disW)>1&& Math.abs(e.clientY-disH)>1){
					if(!weizhuang){
						weizhuang = document.createElement('div');
						weizhuang.className='tuo1';
						document.body.appendChild(weizhuang);
						weizhuang.style.left=disX+'px';
						weizhuang.style.top=disY+'px';
					    tubiao=document.createElement('div');
					    tubiao.className='tubiao'
						tubiao.innerHTML=`
										</div class='tubiao'>
											<div class='shuzi'>${selectarr.length}</div>
											<div class='tupia'></div>
										</div>`;
						document.body.appendChild(tubiao);
					}
					if(!weizhuang) return;
					isHitElement=null;
					weizhuang.style.left=e.clientX-20+'px';
					weizhuang.style.top=e.clientY-10+'px';
					
					tubiao.style.left=e.clientX+5+'px';
					tubiao.style.top=e.clientY+5+'px';
					for (var i = 0; i < lis.length; i++) {
						var onoff=false;
						for(var j=0;j<selectarr.length;j++){
							if(lis[i]==selectarr[j]){
								 onoff=true;
							}
						}
						if(onoff) continue;
						if( fen(lis[i],weizhuang) ){
			        		lis[i].className='xuan act';
			        		
			        		//存一下被碰撞的元素
			        		isHitElement = lis[i];
			        	}else{
			        		lis[i].className='xuan';
			        	}
					}
				}
				return;
			}
			if(Math.abs(e.clientX-disW)>15 ||Math.abs(e.clientY-disH)>15){
				if(!createli){
					createli = document.createElement('div');
					createli.className='tuo';
					document.body.appendChild(createli);
					createli.style.left=disX+'px';
					createli.style.top=disY+'px';
					console.log(createli.style.top)
				}
				if(!createli) return;
				createli.style.left=Math.min(disX,e.clientX+window.pageXOffset)+'px';
				createli.style.top=Math.min(disY,e.clientY+window.pageYOffset)+'px';
				createli.style.width=Math.abs(e.clientX-disW)+'px';
				createli.style.height=Math.abs(e.clientY-disH)+'px';
				for (var i = 0; i < lis.length; i++) {
				if(fen(lis[i],createli)){
					lis[i].children[0].className='ze aact';
					lis[i].className='xuan act';
					
					var bls= Array.from(acts).every(function(value){
						return t.hasClassName(value,"aact");
					})
					if(bls){
						t.addClassName(divQ,'act');
					}else{
						t.removeClassName(divQ,'act');
					}
					del();
				}else{
					lis[i].children[0].className='ze';
					lis[i].className='xuan';
					var bls= Array.from(acts).every(function(value){
						return t.hasClassName(value,"aact");
					})
					if(bls){
						t.addClassName(divQ,'act');
					}else{
						t.removeClassName(divQ,'act');
					}
				}
			}
			}
			
			
			
			
		}
		document.onmouseup=function(){
			if(createli){
				document.body.removeChild(createli);
				createli=null;
			}
			if(weizhuang){
				document.body.removeChild(weizhuang);
				document.body.removeChild(tubiao);
				tubiao=null;
				weizhuang=null;
			}
			
			if(isHitElement){
				var onoff=false;
				var selectArr=del();
				var selectid=selectArr.map(function(item){
					return item.dataset.id;
				});
				var fileId = isHitElement.dataset.id;
				for (var i = 0; i < selectid.length; i++) {
					var self=handle.getSelfById(datas,selectid[i]);
					var isExist = handle.isTitleExist(datas,self.title,fileId);
					
					if(!isExist){
						self.pid=fileId;
						rightContent.removeChild(selectArr[i]);
						isHitElement.className='xuan';
					}else{
						onoff=true;
					}
				}
				if(onoff){
					div1.innerHTML='部分移动失败'
					div1.className='shibai';
					shanglakuang();
				}
				left.innerHTML = creatTreeHtml(-1);
				isHitElement = null;
			}
			
			document.onmousemove=null;
			document.onmouseup=null;
		}
		return false;
    }
    function fen(obj1,obj2){
    	var lix=obj1.getBoundingClientRect();
    	var crete=obj2.getBoundingClientRect();
    	return lix.left<crete.right && lix.right>crete.left && lix.top<crete.bottom && lix.bottom>crete.top;
    }
//-----------------------------右击------------------------------------------
  rightContent.oncontextmenu=function(){
  		return false;
  }
//-------------------------------移动到----------------------------------------------	
	t.on(xinjian[2],'click',function(){
		var selects=del();
		var moveStatus = true;
		var fileId = null;
		if(selects.length!=0){
			new Dialog({
				title:'移动到',
				content:'<div class="left zidong">'+creatTreeHtml(-1)+'</div>',
				left:null,
				top:null,
				okFn:function(){
					if( moveStatus ){
						return true;
					}else{
						var onoff = false;
						for( var i = 0; i < selectsId.length; i++ ){
							var self = handle.getSelfById(datas,selectsId[i]);
							console.log(self)
							var isExist = handle.isTitleExist(datas,self.title,fileId);
							console.log(fileId)
							if( !isExist ){
								console.log(fileId)
								self.pid = fileId;
								rightContent.removeChild(selects[i]);
							}else{
								
								onoff = true;  //只要onOff为true，说明有一个移动失败，因为重名了;
							}
						}
						if(onoff){
							div1.innerHTML='部分移动失败'
							div1.className='shibai';
							shanglakuang();
						}
						left.innerHTML = creatTreeHtml(-1);
					}
				}
			});
			var zidong = document.getElementsByClassName('zidong');
			var weiyun = zidong[0].querySelectorAll(".select")[0];
			t.addClassName(weiyun,"wei");
			var currentElement = weiyun;
			var selectsId=[];
			selects.forEach(function(value){
				selectsId.push(value.dataset.id)
			});
			var selectData = handle.getChildsAllByIdarr(datas,selectsId);
			t.on(zidong[0],'click',function(e){
				var target=e.target;
				var onoff=false;
				var red=document.querySelector('.red');
				if(target=t.parent(target,'.select')){
					t.removeClassName(currentElement,"wei");
					t.addClassName(target,"wei");
					currentElement = target;
					 fileId=target.dataset.id;
					
					var oneData =handle.getSelfById(datas,fileId);
					
					var selfData = handle.getSelfById(datas,selectsId[0]);
					console.log(selfData)
					if(fileId==selfData.pid){
						red.innerHTML = "该文件下已经存在";
						moveStatus=true;
						return;
					}
					for (var i = 0; i < selectData.length; i++) {
						if(oneData.id===selectData[i].id){
							onoff=true;
							break;
						}
					}
					if(onoff){
						red.innerHTML='不能移入自己或子元素文件';
						moveStatus = true;
					}else{
						red.innerHTML='';
						moveStatus = false;
					}
				}
				console.log(fileId)
			})
			
		}else{
			div1.innerHTML='请选择文件'
			div1.className='shibai';
			shanglakuang();
		}
		
	});
})()

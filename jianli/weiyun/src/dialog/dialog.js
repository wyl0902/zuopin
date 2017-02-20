function Dialog(opstions){
				opstions=opstions||{};  
				if(opstions.constructor!=Object){
					opstions={};
				}
				this.defualt={
					title:'这是标题',
					content:'这是内容',
					left:null,
					top:null,
					okFn:function(){}
				}
				for(var attr in opstions){
					if(opstions.hasOwnProperty(attr)){
						this.defualt[attr]=opstions[attr]
					}
				}
				this.init();
				this.head=this.dell.querySelector('.head')
				new Drag({
					targetEle:this.head,
					moveEle:this.dell
				})
				
			}
			Dialog.prototype={
				constructor:Dialog,
				init(){
					
					this.dell=this.creatHtml();
					document.body.appendChild(this.dell);
					this.mask=this.creatzhao();
					document.body.appendChild(this.mask);
					
					this.position();
					this.dianji();
				},
				creatHtml(){
					var str=`
							<div class='head'>
								<h4>${this.defualt.title}</h4>
								<a class='close' href='javascript:;'>×</a>
							</div>
							<div class='content' >
								<p>${this.defualt.content}</p>
								<div class='qud clearfix'>
									<span class='red'></span>
									<a class='confirm'  href='javascript:;'>取消</a>
									<a class='cancel'  href='javascript:;'>确定 </a>
								</div>
							</div>`;
					var dell=document.createElement('div');
					dell.className='dell';
					dell.innerHTML=str;
					return dell;
					console.log(this.defualt)
				},
				creatzhao(){
					var mask=document.createElement('div');
					mask.style.cssText='height: 100%;width: 100%;background: rgba(0,0,0,0.5);position: fixed;left: 0;top: 0;';
//					document.body.appendChild(mask);
					return mask;
				},
				position(){
					var isLeft= this.defualt.left!=null && isNaN(Number(this.defualt.left));
					var isTop= this.defualt.top!=null && isNaN(Number(this.defualt.top));
					
					var top = (document.documentElement.clientHeight - this.dell.offsetHeight)/2;

					var left = (document.documentElement.clientWidth - this.dell.offsetWidth)/2;
					if(isLeft && isTop){
						this.dell.style.left = this.defualt.left + "px";
						this.dell.style.top = this.defualt.top + "px";
					}else if( isLeft ){
						this.dell.style.left = this.defualt.left + "px";
						this.dell.style.top = top + "px";
					}else if( isTop ){
						this.dell.style.left = left + "px";
						this.dell.style.top = this.defualt.top + "px";
					}else{
						this.dell.style.left = left+ "px";
						this.dell.style.top = top + "px";
					}
				},
				dianji(){
					var _this=this;
					this.close = this.dell.querySelector(".close");
					this.close = this.dell.querySelector(".close");
					this.ok = this.dell.querySelector(".confirm");
					this.cancel = this.dell.querySelector(".cancel");
				
					this.close.addEventListener("click",function (){
						document.body.removeChild(_this.dell);
						document.body.removeChild(_this.mask);
					},false)
					this.cancel.addEventListener("click",function (){
					_this.bl = _this.defualt.okFn(); 
					/*
						1. return undefined 关闭
						2. return false  关闭
						3. return true   不关闭
					*/
			
					if( !_this.bl ){
							document.body.removeChild(_this.dell);
							document.body.removeChild(_this.mask);
					}
					},false)
					this.ok.addEventListener("click",function (){
						document.body.removeChild(_this.dell);
						document.body.removeChild(_this.mask);
					},false)
				}
			}
function Drag(options){
	//必填并且必须是一个对象
	if( typeof options === "undefined" || options.constructor !== Object ){

		//抛出错误
		throw new Error("传入的参数错误，必须是对象");
		return;
	}
	console.log(this)
	//不能直操作传进来的对象
	this.defaults = {
		targetEle:null,
		moveEle:null
	}

	for( var attr in options ){
		if(options.hasOwnProperty(attr)){
			this.defaults[attr] = options[attr];
		}
	}

	//拖拽的目标
	//this.element是移动的目标
	if( this.defaults.moveEle ){
		this.element = this.defaults.moveEle;
	}else{
		this.element = this.defaults.targetEle;
	}

	
	this.init();
}

Drag.prototype = {
	constructor: Drag,
	init(){
		//要把一个函数的this改变为指定的值，并且不调用函数
		this.defaults.targetEle.onmousedown = this.downFn.bind(this);
	},
	downFn(ev){
		//this => 实例
		this.disX = ev.clientX - this.element.offsetLeft;
		this.disY = ev.clientY - this.element.offsetTop;
		this.defaults.targetEle.style.cursor = "move";
		
		document.onmousemove = this.moveFn.bind(this);
		document.onmouseup = this.upFn;

		ev.preventDefault();
	},
	limit(){
		if( this.x < 0 ){
			this.x = 0;
		}
		if( this.x > document.documentElement.clientWidth - this.element.offsetWidth ){
			this.x = document.documentElement.clientWidth - this.element.offsetWidth;
		}
		if( this.y < 0 ){
			this.y = 0;
		}
		if( this.y > document.documentElement.clientHeight - this.element.offsetHeight ){
			this.y = document.documentElement.clientHeight - this.element.offsetHeight;
		}
	},
	moveFn(ev){

		//限制的两个运算后的值

		this.x = ev.clientX - this.disX;
		this.y = ev.clientY - this.disY;

		this.limit();

		this.element.style.left = this.x + "px";
		this.element.style.top = this.y + "px";
	},
	upFn(){
//		this.element.style.cursor = "";
		document.onmousemove = null;
		document.onmouseup = null;
	}
}

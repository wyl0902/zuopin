function drag(options){
				if(typeof options=='undefined' || options.constructor!==Object){
					throw new Error('传入不是对象')
					return ;
				}
				this.defaults={
						targetEle:null,
						moveEle:null
					}
				for(var attr in options){
					if(options.hasOwnProperty(attr)){
						this.defaults[attr]=options[attr]
					}
				}
				if(this.defaults.moveEle){
					this.element=this.defaults.moveEle;
				}else{
					this.element=this.defaults.targetEle;
				}
				this.init();
			}
			drag.prototype={
				constructor:drag,
				init(){
					this.defaults.targetEle.onmousedown=this.DownFn.bind(this)
				},
				DownFn(ev){
					this.disX=ev.clientX-this.element.offsetLeft;
					this.disY=ev.clientY-this.element.offsetTop;
					document.onmousemove=this.MoveFn.bind(this);
					document.onmouseup=this.upFn;
					ev.preventDefault();
				},
				MoveFn(ev){
					console.log(this)
					this.x=ev.clientX-this.disX;
					this.y=ev.clientY-this.disY;
					if(this.x<0){
						this.x=0
					}
					if(this.y<0){
						this.y=0
					}
					if(this.y>document.documentElement.clientHeight-this.element.offsetHeight){
						this.y=document.documentElement.clientHeight-this.element.offsetHeight
					}
					if(this.x>document.documentElement.clientWidth-this.element.offsetWidth){
						this.x =document.documentElement.clientWidth-this.element.offsetWidth
					}
					this.element.style.left=this.x+'px';
					this.element.style.top=this.y+'px';
				},
				upFn(){
					document.onmousemove=null;
					document.onmouseup=null;
				}
				
			}
			
			new drag({
					targetEle:title,
					moveEle:drag1
				});
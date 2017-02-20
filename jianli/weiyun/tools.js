(function(){
	var methods={
		on(element,evName,evFn){
			element.addEventListener(evName,evFn,false);
		},
		off(element,evName,evFn){
			element.removeEventListener(evName,evFn,false);
		},
		//给元素添加指定的class
		addClassName(element,className){
			if(!methods.hasClassName(element,className)){
				element.className+=' '+className;
//				console.log(element.className)
			}
		},
		hasClassName(element,className){
			var classArr=element.className.split(' ');
			for (var i = 0; i < classArr.length; i++) {
				if(classArr[i]==className){
					return true;
				}
			}
			return false;
		},
		removeClassName(element,className){
			if(methods.hasClassName(element,className)){
				var classArr=element.className.split(' ');
				for (var i = 0; i < classArr.length; i++) {
					if(classArr[i]==className){
						classArr.splice(i,1);
						i--;
					}
				}
				element.className=classArr.join(' ');
			}
		},
		toggleClass(element,className){
			if(methods.hasClassName(element,className)){
				methods.removeClassName(element,className);
				return false;
			}else{
				methods.addClassName(element,className);
				return true;
			}
		},
		parent(element,attr){
			var firstChar=attr.charAt(0);
			if(firstChar=='.'){
				while( element.nodeType!=9 && !methods.hasClassName(element,attr.slice(1))){
					//element没有指定的class，那么element就为父级，继续向上找
					element=element.parentNode
				}
			}else if(firstChar=='#'){
				//element没有指定的id，那么element就为父级，继续向上找
				while(element.nodeType!=9 && element.id!=attr.slice(1)){
					element=element.parentNode;
				}
			}else{
				while(element.nodeType!=9 && element.nodeName!=attr.toUpperCase()){
					element=element.parentNode;
				}
			}
			return element.nodeType === 9 ? null : element;
		}
	}
	window.t = methods;
})()

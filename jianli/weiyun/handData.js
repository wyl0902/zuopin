var handle={
	//通过Id 找自己
	getSelfById:function(data,id){
	return	data.find(function(value){
			return value.id==id;
		})
	},
	
	//通过id找下面的子元素
	getChildsById:function(data,id){
	return data.filter(function(value){
			return value.pid==id;
		})
	},
	
	//通过id找父级；
	getParentsById:function(data,id){
		var arr=[];
	var self=handle.getSelfById(data,id);
	   if(self){
	   	arr.push(self);
	   	arr=arr.concat(handle.getParentsById(data,self.pid))
	   }
	   return arr;
	},
	//通过指定id，找到这个id的所有的子孙数据，放在数组中
	getChildsAll(data,id){
		var arr = [];
		var self = handle.getSelfById(data,id);
		arr.push(self);
		//在子数据
		var childs = handle.getChildsById(data,self.id);

		childs.forEach(function (value){
			arr = arr.concat(handle.getChildsAll(data,value.id));
		})
		return arr;
		console.log(arr)
	},
	//指定多个id，找到这些多个id的每一个数据的子孙数据
	/*
		idArr:[1,2,3,4]
		1的子孙数据[{},{}]
		2的子孙数据[{},{}]

		[{},{},{},{}]
	*/
	getChildsAllByIdarr(data,idArr){
		var arr = [];
		idArr.forEach(function (value){
			//arr.push(handle.getChildsAll(data,value));	
			arr = arr.concat(handle.getChildsAll(data,value));
		})

		return arr;
	},
	isTitleExist(data,value,id){
		var childs = handle.getChildsById(data,id);  //先找到指定id的所有子级
		return childs.findIndex(function(item){
			return item.title === value;
		}) !== -1;
	},

	//指定多个id，删除多个id下面的子孙数据

	delectChildsAll(data,idArr){
		//所有的子孙数据
		var childsAll = handle.getChildsAllByIdarr(data,idArr);
		
		//循环data，拿到data的每一项，跟childsAll每一项对比
		for( var i = 0; i < data.length; i++ ){
			for( var j = 0; j < childsAll.length; j++ ){
				if( data[i] ==childsAll[j] ){
					data.splice(i,1);
					i--;
					break;
				}
			}
		}
	}
}

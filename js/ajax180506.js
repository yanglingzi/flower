
//ajax请求
//参数：
//请求方式：
//请求的地址：
//请求参数：
//是否异步：
//回调函数：后端响应回来后，前端应该完成的功能

//返回值：无

function ajax(method,url,param,isAsync,func){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	
	//2、设置请求参数
	if(method.toLowerCase()=="get"){
		xhr.open(method,url+"?"+param,isAsync);		
	}else{
		xhr.open(method,url,isAsync);		
	}
	
	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			func&&func(xhr.responseText);
		}
	}
	
	if(method.toLowerCase()=="get"){
		//4、发送请求
		xhr.send();
	}else if(method.toLowerCase()=="post"){
		//4、发送请求
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(param);
	}
}


//ajax请求
//参数：
//请求方式：
//请求的地址：
//请求参数：
//是否异步：
//回调函数：后端响应回来后，前端应该完成的功能

//返回值：无

//ajaxByObj({
//	url:"getmusic.php",
//	method:"get",
//	param:"musicname=you",
//	isAsync:true,
//	func:function(){}
//});

//参数用对象的方式表示

function ajaxByObj(obj){
	//1、创建对象
	let xhr = new XMLHttpRequest();
	
	//2、设置请求参数
	if(obj.method.toLowerCase()=="get"){
		xhr.open(obj.method,obj.url+"?"+obj.param,obj.isAsync);		
	}else{
		xhr.open(obj.method,obj.url,obj.isAsync);		
	}
	
	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			obj.func&&obj.func(xhr.responseText);
		}
	}
	
	if(obj.method.toLowerCase()=="get"){
		//4、发送请求
		xhr.send();
	}else if(obj.method.toLowerCase()=="post"){
		//4、发送请求
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(obj.param);
	}
}

/*
ajaxByObjAndDefault({
	url:"getmusic.php",
	param:"musicname=you",
	func:function(){}
});
*/
function ajaxByObjAndDefault(obj){	
	//默认值
	let defaultObj = {
						url:"#",
						method:"get",
						param:"",
						isAsync:true,
						func:null
			}	
	for(let key in obj){
		defaultObj[key] = obj[key];//url
	}
	
	//1、创建对象
	let xhr = new XMLHttpRequest();
	
	//2、设置请求参数
	if(defaultObj.method.toLowerCase()=="get"){
		xhr.open(defaultObj.method,defaultObj.url+"?"+defaultObj.param,defaultObj.isAsync);		
	}else{
		xhr.open(defaultObj.method,defaultObj.url,defaultObj.isAsync);		
	}
	
	//3、设置回调函数
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			defaultObj.func&&defaultObj.func(xhr.responseText);
		}
	}
	
	if(defaultObj.method.toLowerCase()=="get"){
		//4、发送请求
		xhr.send();
	}else if(defaultObj.method.toLowerCase()=="post"){
		//4、发送请求
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.param);
	}
}


function ajaxByPromise(obj){	
	//默认值
	let defaultObj = {
						url:"#",
						method:"get",
						param:"",
						isAsync:true
			}	
	for(let key in obj){
		defaultObj[key] = obj[key];//url
	}
	
	//1、创建对象
	let xhr = new XMLHttpRequest();
	
	//2、设置请求参数
	if(defaultObj.method.toLowerCase()=="get"){
		xhr.open(defaultObj.method,defaultObj.url+"?"+defaultObj.param,defaultObj.isAsync);		
	}else{
		xhr.open(defaultObj.method,defaultObj.url,defaultObj.isAsync);		
	}
	
	//3、设置回调函数
	let p = new Promise(function(resovle,reject){
		xhr.onreadystatechange = function(){
			if(xhr.readyState==4){
				if(xhr.status==200){
					resovle&&resovle(xhr.responseText);
				}else{
					reject&&reject("服务器出错了！");
				}
			}
		}
	});

	if(defaultObj.method.toLowerCase()=="get"){
		//4、发送请求
		xhr.send();
	}else if(defaultObj.method.toLowerCase()=="post"){
		//4、发送请求
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defaultObj.param);
	}
	
	return p;
}
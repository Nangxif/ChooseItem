// $(function(){
// 	//数据
// 	var data={
// 		level:"读书郎",
// 		id:"readboy",
// 		childlevel:[{
// 			level:"总经办",
// 			id:"all",
// 			childlevel:[],
// 			staf:[
// 			{
// 				id:"Z1",
// 				level:"总经办阿七"
// 			},
// 			{
// 				id:"Z2",
// 				level:"总经办阿哥"
// 			},
// 			{
// 				id:"Z3",
// 				level:"总经办阿龙"
// 			},
// 			{
// 				id:"Z4",
// 				level:"总经办阿东"
// 			},
// 			{
// 				id:"Z5",
// 				level:"总经办阿强"
// 			}]
// 		},{
// 			level:"市场营销",
// 			id:"market",
// 			childlevel:[{
// 				level:"客户服务",
// 				id:"service",
// 				childlevel:[{
// 					level:"400客服",
// 					id:"service1",
// 					childlevel:[],
// 					staf:[
// 						{
// 							id:"K1",
// 							level:"客服阿七"
// 						},
// 						{
// 							id:"K2",
// 							level:"客服阿哥"
// 						},
// 						{
// 							id:"K3",
// 							level:"客服阿龙"
// 						},
// 						{
// 							id:"K4",
// 							level:"客服阿东"
// 						},
// 						{
// 							id:"Z5",
// 							level:"客服阿强"
// 						}]
// 				}]
// 			},{
// 				level:"推培部",
// 				id:"teach",
// 				childlevel:[{
// 					level:"推培一部",
// 					id:"teach1",
// 					childlevel:[],
// 					staf:[
// 						{
// 							id:"T1",
// 							level:"推培一部阿七"
// 						},
// 						{
// 							id:"T2",
// 							level:"推培一部阿哥"
// 						},
// 						{
// 							id:"T3",
// 							level:"推培一部阿龙"
// 						},
// 						{
// 							id:"T4",
// 							level:"推培一部阿东"
// 						},
// 						{
// 							id:"T5",
// 							level:"推培一部阿强"
// 						}]
// 				},{
// 					level:"推培二部",
// 					id:"teach2",
// 					childlevel:[],
// 					staf:[
// 						{
// 							id:"TS1",
// 							level:"推培二部阿七"
// 						},
// 						{
// 							id:"TS2",
// 							level:"推培二部阿哥"
// 						},
// 						{
// 							id:"TS3",
// 							level:"推培二部阿龙"
// 						},
// 						{
// 							id:"TS4",
// 							level:"推培二部阿东"
// 						},
// 						{
// 							id:"TS5",
// 							level:"推培二部阿强"
// 						}]
// 				}]
// 			},{
// 				level:"渠道部",
// 				id:"way",
// 				childlevel:[{
// 					level:"渠道一部",
// 					id:"way1",
// 					childlevel:[],
// 					staf:[
// 						{
// 							id:"Q1",
// 							level:"渠道一部阿七"
// 						},
// 						{
// 							id:"Q2",
// 							level:"渠道一部阿哥"
// 						},
// 						{
// 							id:"Q3",
// 							level:"渠道一部阿龙"
// 						},
// 						{
// 							id:"Q4",
// 							level:"渠道一部阿东"
// 						},
// 						{
// 							id:"Q5",
// 							level:"渠道一部阿强"
// 						}]
// 				},{
// 					level:"渠道二部",
// 					id:"way2",
// 					childlevel:[],
// 					staf:[
// 						{
// 							id:"QS1",
// 							level:"渠道二部阿七"
// 						},
// 						{
// 							id:"QS2",
// 							level:"渠道二部阿哥"
// 						},
// 						{
// 							id:"QS3",
// 							level:"渠道二部阿龙"
// 						},
// 						{
// 							id:"QS4",
// 							level:"渠道二部阿东"
// 						},
// 						{
// 							id:"QS5",
// 							level:"渠道二部阿强"
// 						}]
// 				}]
// 			}]
// 		}]
// 	};

// 	var html = template('tem', data);
// 	$('#content-area').html(html);
// 	$("#showModal").click(function(){//点击输入框清除所有checkbox选择状态
// 		$("input[type='checkbox']").attr("checked",false);
// 	});
// 	$("#apartment .dropdow").click(function(){
// 		if($(this).parent().children("ul").is(':hidden')==true){
// 			$(this).parent().children("ul").css({"display":"block"});
// 		}else{
// 			$(this).parent().children("ul").css({"display":"none"});
// 		}
// 	})
// 	var Arr=[];
// 	$("#self .dropdow").click(function(){
// 		if($(this).parent().children("ul").is(':hidden')==true){
// 			$(this).parent().children("ul").css({"display":"block"});
// 		}else{
// 			$(this).parent().children("ul").css({"display":"none"});
// 		}
// 		if($(this).find("span").text()=="[]"||$(this).find("span").text()==""){
// 		}else{
// 			Arr=JSON.parse($(this).find("span").text());
// 			$("#self .detail").children().remove();//在右边栏生成列表之前，必须清除掉原来右边栏的checkbox
// 			//获取已选择的checkbox的长度
// 			var ChooseBoxLen=$(".isExit").length||0;

// 			for(var i=0;i<Arr.length;i++){//在循环生成checkbox的同时，也要判断一下checkbox的选择状态
// 				var h=$("<p class='line'>"+Arr[i]["level"]+"<input type='checkbox' class='A' id='"+Arr[i]["id"]+"'/><label class='checkbox_label' for='"+Arr[i]["id"]+"' onclick='addItem($(this),$(this).parent().text())'></label></p>");
// 				var isChecked=false;//点击左边栏生成右边栏时判断checkbox的状态
// 				for(var j=0;j<ChooseBoxLen;j++){
// 					if($(".choosebox").eq(j).find("span").eq(0).text()==Arr[i]["id"]){
// 						isChecked=true;
// 					}
// 				}
// 				h.find("input").attr("checked",isChecked);
// 				$("#self .detail").append(h);
// 			}
// 		}
// 	})


// 	window.addItem=function(obj,text){
// 		var chooseLen=$(".isExit").length;//判断选中框元素的个数
// 		var isExit=false;//判断选中的checkbox是否已经在选中框中
// 		for(var i=0;i<chooseLen;i++){
// 			if($(".isExit").eq(i).text()==obj.parent().find("input").attr("id")){//只要有存在，那么就是true
// 				isExit=true;
// 			}
// 		}
// 		if(isExit){
// 			obj.parent().find("input").on("click",function(e){//如果已经存在的话，那么CheckBox就处于选中的状态
// 				e.preventDefault();
// 			})
// 		}else{
// 			var T=$("<p class='choosebox'><span class='isExit'>"+obj.parent().find("input").attr("id")+"</span><span>"+text+"</span><span class='delete' onclick='removeItem($(this))'>x</span></p>");//<span>标签是一个占位符，里面存放的是选中的checkbox的id
// 			$(".choose").append(T);	
// 		}
// 	}
// 	window.removeItem=function(obj){
// 		var ALen=$("#tem input[type='checkbox']").length;//判断checkbox的总数
// 		var chooseId=obj.parent().find("span").eq(0).text();//要删除的选项的id
// 		for(var m=0;m<ALen;m++){
// 			if($(".A").eq(m).attr("id")==chooseId){
// 				obj.parent().remove();
// 				$(".A").eq(m).attr("checked",false);
// 			}
// 		}
// 	}

// 	$("#sure").on("click",function(){
// 		for(var n=0;n<$(".choosebox").length;n++){
// 			$(".showItem").append("<li>"+$(".choosebox").eq(n).find("span").eq(1).text()+"</li>");
// 		}
// 		$(".choose").empty();
// 		$(this).attr({"data-dismiss":"modal","aria-hidden":"true"})
// 	})
	
// })


;(function($, window, document) {
	function ChooseItem(){
		this.Arr=[];//左边标签页的左边栏每个下拉菜单隐藏的右边框需要显示的数据
		this.showModal=$("#showModal");
		this.apDropDow=$("#apartment .dropdow");
		this.seDropDow=$("#self .dropdow");
		this.sure=$("#sure");
	};
	ChooseItem.prototype.usefor=function(){
		this.showModal.click(function(){//点击输入框清除所有checkbox选择状态
			$("input[type='checkbox']").attr("checked",false);
		});
		//左边标签页的下拉菜单功能
		this.apDropDow.click(function(){
			if($(this).parent().children("ul").is(':hidden')==true){
				$(this).parent().children("ul").css({"display":"block"});
			}else{
				$(this).parent().children("ul").css({"display":"none"});
			}
		})
		//右边标签页的下拉菜单功能
		this.seDropDow.click(function(){
			if($(this).parent().children("ul").is(':hidden')==true){
				$(this).parent().children("ul").css({"display":"block"});
			}else{
				$(this).parent().children("ul").css({"display":"none"});
			}
			if($(this).find("span").text()=="[]"||$(this).find("span").text()==""){
			}else{
				this.Arr=JSON.parse($(this).find("span").text());
				$("#self .detail").children().remove();//在右边栏生成列表之前，必须清除掉原来右边栏的checkbox
				//获取已选择的checkbox的长度
				var ChooseBoxLen=$(".isExit").length||0;
				for(var i=0;i<this.Arr.length;i++){//在循环生成checkbox的同时，也要判断一下checkbox的选择状态
					var h=$("<p class='line'>"+this.Arr[i]["level"]+"<input type='checkbox' class='A' id='"+this.Arr[i]["id"]+"'/><label class='checkbox_label' for='"+this.Arr[i]["id"]+"' onclick='addItem($(this),$(this).parent().text())'></label></p>");
					var isChecked=false;//点击左边栏生成右边栏时判断checkbox的状态
					for(var j=0;j<ChooseBoxLen;j++){
						if($(".choosebox").eq(j).find("span").eq(0).text()==this.Arr[i]["id"]){
							isChecked=true;
						}
					}
					h.find("input").attr("checked",isChecked);
					$("#self .detail").append(h);
				}
			}
		})
		//确定按钮，点击确定按钮之后获取已选择的checkbox信息，将信息添加到弹框外面，然后清除弹框里面的操作数据
		this.sure.on("click",function(){
			for(var n=0;n<$(".choosebox").length;n++){
				$(".showItem").append("<li>"+$(".choosebox").eq(n).find("span").eq(1).text()+"</li>");
			}
			$(".choose").empty();
			$(this).attr({"data-dismiss":"modal","aria-hidden":"true"})
		})
	};


	//在choose框添加项目
	window.addItem=function(obj,text){
		var chooseLen=$(".isExit").length;//判断选中框元素的个数
		var isExit=false;//判断选中的checkbox是否已经在选中框中
		for(var i=0;i<chooseLen;i++){
			if($(".isExit").eq(i).text()==obj.parent().find("input").attr("id")){//只要有存在，那么就是true
				isExit=true;
			}
		}
		if(isExit){
			obj.parent().find("input").on("click",function(e){//如果已经存在的话，那么CheckBox就处于选中的状态
				e.preventDefault();
			})
		}else{
			var T=$("<p class='choosebox'><span class='isExit'>"+obj.parent().find("input").attr("id")+"</span><span>"+text+"</span><span class='delete' onclick='removeItem($(this))'>x</span></p>");//<span>标签是一个占位符，里面存放的是选中的checkbox的id
			$(".choose").append(T);	
		}
	}
	//移除choose框的项目
	window.removeItem=function(obj){
		var ALen=$(".A").length;//判断checkbox的总数
		var chooseId=obj.parent().find("span").eq(0).text();//要删除的选项的id
		for(var m=0;m<ALen;m++){
			if($(".A").eq(m).attr("id")==chooseId){
				obj.parent().remove();
				$(".A").eq(m).attr("checked",false);
			}
		}
	}
	ChooseItem.case = function() {
		return new ChooseItem();
	};
	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		define(function() {
			return ChooseItem;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = ChooseItem.case;
		module.exports.ChooseItem = ChooseItem;
	} else {
		window.ChooseItem = ChooseItem;
	}
})(jQuery,window,document);
$(function(){
	//数据
	var data={
		level:"读书郎",
		id:"readboy",
		childlevel:[{
			level:"总经办",
			id:"all",
			childlevel:[],
			staf:["总经办阿七","总经办阿哥","总经办阿龙","总经办阿东","总经办阿强"]
		},{
			level:"市场营销",
			id:"market",
			childlevel:[{
				level:"客户服务",
				id:"service",
				childlevel:[{
					level:"400客服",
					id:"service1",
					childlevel:[],
					staf:["客户服务阿七","客户服务阿哥","客户服务阿龙","客户服务阿东","客户服务阿强"]
				}]
			},{
				level:"推培部",
				id:"teach",
				childlevel:[{
					level:"推培一部",
					id:"teach1",
					childlevel:[],
					staf:["推培一部阿七","推培一部阿哥","推培一部阿龙","推培一部阿东","推培一部阿强"]
				},{
					level:"推培二部",
					id:"teach2",
					childlevel:[],
					staf:["推培二部阿七","推培二部阿哥","推培二部阿龙","推培二部阿东","推培二部阿强"]
				}]
			},{
				level:"渠道部",
				id:"way",
				childlevel:[{
					level:"渠道一部",
					id:"way1",
					childlevel:[],
					staf:["渠道一部阿七","渠道一部阿哥","渠道一部阿龙","渠道一部阿东","渠道一部阿强"]
				},{
					level:"渠道二部",
					id:"way2",
					childlevel:[],
					staf:["渠道二部阿七","渠道二部阿哥","渠道二部阿龙","渠道二部阿东","渠道二部阿强"]
				}]
			}]
		}]
	};
	var html = template('tem', data);
	$('#content-area').html(html);
	$("#apartment .dropdow").click(function(){
		if($(this).parent().children("ul").is(':hidden')==true){
			$(this).parent().children("ul").css({"display":"block"});
		}else{
			$(this).parent().children("ul").css({"display":"none"});
		}	
	})
	var Arr=[];
	$("#self .dropdow").click(function(){
		if($(this).parent().children("ul").is(':hidden')==true){
			$(this).parent().children("ul").css({"display":"block"});
		}else{
			$(this).parent().children("ul").css({"display":"none"});
		}
		if($(this).find("span").text()=="[]"||$(this).find("span").text()==""){
		}else{
			Arr=JSON.parse($(this).find("span").text());
			$("#self .detail").children().remove();
			for(var i=0;i<Arr.length;i++){
				var h=$("<p class='line'>"+Arr[i]+"<input type='checkbox' class='A' id='A"+i+"'/><label class='checkbox_label' for='A"+i+"'></label></p>");
				$("#self .detail").append(h);
			}
		}
	})
})